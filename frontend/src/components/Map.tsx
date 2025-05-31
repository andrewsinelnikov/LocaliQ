import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import type { LatLngExpression } from 'leaflet';
import { Icon } from 'leaflet';
import type { IProducer } from '../utils/types';

// Optional: custom marker
const customIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

interface MapProps {
  producers: IProducer[];
}

const Map = ({ producers }: MapProps) => {
  const center: LatLngExpression = [49.8397, 24.0297]; // Default center (Lviv)

  return (
    <MapContainer center={center} zoom={6} scrollWheelZoom={true} className="leaflet-container">
      <TileLayer
        attribution='&copy; <a href="https://osm.org">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {producers.map((producer) => (
        <Marker
          key={producer.id}
          position={[producer.location.lat, producer.location.lng]}
          icon={customIcon}
        >
          <Popup>
            <strong>{producer.name}</strong>
            <p>{producer.description}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
