import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

interface AutoCenterMapProps {
  lat: number;
  lng: number;
}

const AutoCenterMap = ({ lat, lng }: AutoCenterMapProps) => {
  const map = useMap();

  useEffect(() => {
    map.setView([lat, lng], 10);
  }, [lat, lng, map]);

  return null;
};

export default AutoCenterMap;
