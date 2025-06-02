// src/components/map/LocationPicker.tsx
import { Marker, useMapEvents } from 'react-leaflet';
import { Icon } from 'leaflet';

const customIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

interface LocationPickerProps {
  location: { lat: number; lng: number };
  onChange: (lat: number, lng: number) => void;
}

const LocationPicker = ({ location, onChange }: LocationPickerProps) => {
  // Вибір точки на карті
  useMapEvents({
    click(e) {
      onChange(e.latlng.lat, e.latlng.lng);
    },
  });


  return <Marker position={[location.lat, location.lng]} icon={customIcon} />;
};

export default LocationPicker;
