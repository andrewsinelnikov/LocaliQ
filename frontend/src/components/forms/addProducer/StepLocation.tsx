import { MapContainer, TileLayer } from 'react-leaflet';
import type L from 'leaflet';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import type { FormStepProps } from '../../../utils/types';
import LocationPicker from '../../map/LocationPicker';
import AutoCenterMap from '../../map/AutoCenterMap';

const StepLocation = ({ form, onChange, nextStep, prevStep }: FormStepProps) => {
  const { t } = useTranslation();
  const mapRef = useRef<L.Map | null>(null);

  const handleGeolocation = () => {
    navigator.geolocation?.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      onChange('location', { lat: latitude, lng: longitude });
      mapRef.current?.setView([latitude, longitude], 13);
    });
  };

  return (
    <>
      {/* <label>{t('addProducer.mapLabel')}</label> */}
      <div className="map-wrapper">
        <MapContainer
          center={[form.location.lat, form.location.lng]}
          zoom={13}
          scrollWheelZoom={true}
          style={{ height: 250, width: '100%', borderRadius: '12px' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://osm.org">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationPicker
            location={form.location}
            onChange={(lat, lng) => onChange('location', { lat, lng })}
          />
          <AutoCenterMap lat={form.location.lat} lng={form.location.lng} />
        </MapContainer>
      </div>
      <p className="geo-hint">
        <span onClick={handleGeolocation} className="geo-hint-text">
          {t('addProducer.detectLocation')}
        </span>
      </p>

      <div className='steps'>
        <button type="button" onClick={prevStep}>{t('addProducer.back')}</button>
        <button type="button" onClick={nextStep}>{t('addProducer.next')}</button>
      </div>
    </>
  );
};

export default StepLocation;