import { getSeason } from '../../utils/getSeason';

const Awning = () => {
  const season = getSeason();

  return (
    <div className={`awning ${season}`}>
      {[...Array(20)].map((_, i) => (
        <div key={i} className={`stripe stripe${i % 2 === 0 ? '1' : '2'}`} />
      ))}
    </div>
  );
};

export default Awning;