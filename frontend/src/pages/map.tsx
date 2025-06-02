import Map from '../components/map/Map';
import Sidebar from '../components/layout/Sidebar';
import type { IProducer } from '../utils/types';

interface MapPageProps {
  producers: IProducer[];
  categories: string[];
  selected: string;
  onSelect: (val: string) => void;
}

const MapPage = ({ producers, categories, selected, onSelect }: MapPageProps) => {
  return (
    <div className="app">
      <Sidebar
        categories={categories}
        selected={selected}
        onSelect={onSelect}
      />
      <div className="map-container">
        <Map producers={producers} />
      </div>
    </div>
  );
};

export default MapPage;
