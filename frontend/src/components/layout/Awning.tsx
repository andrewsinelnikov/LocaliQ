import { getSeason } from '../../utils/getSeason';

const Awning = () => {
  const season = getSeason();

  return (
    <div className={`awning ${season}`} />
  );
};

export default Awning;