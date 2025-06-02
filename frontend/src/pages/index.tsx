import Home from '../components/Home';
import { useNavigate } from 'react-router';

const HomePage = ({ categories, selected, onSelect }: any) => {
  const navigate = useNavigate();
  return (
    <Home
      onShowMap={() => navigate('/map')}
      categories={categories}
      selected={selected}
      onSelect={onSelect}
    />
  );
};

export default HomePage;