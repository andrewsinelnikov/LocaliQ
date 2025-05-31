import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import type { IProducer } from '../utils/types';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

interface MapProps {
  producers: IProducer[];
}

const Map = ({ producers }: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!map.current && mapContainer.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [24.0311, 49.8429],
        zoom: 6,
      });
    }

    // Clear existing markers
    map.current?.eachLayer((layer) => {
      if ('id' in layer && layer.id.startsWith('marker')) {
        map.current?.removeLayer(layer.id);
        map.current?.removeSource(layer.id);
      }
    });

    producers.forEach((producer) => {
      new mapboxgl.Marker()
        .setLngLat([producer.location.lng, producer.location.lat])
        .setPopup(
          new mapboxgl.Popup().setHTML(
            `<strong>${producer.name}</strong><p>${producer.description}</p>`
          )
        )
        .addTo(map.current!);
    });
  }, [producers]);

  return <div ref={mapContainer} id="map"></div>;
};

export default Map;
