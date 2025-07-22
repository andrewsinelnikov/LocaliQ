const getSeason = () => {
  const month = new Date().getMonth(); // 0 = Jan, 11 = Dec
  if (month <= 1 || month === 11) return "winter";
  if (month <= 4) return "spring";
  if (month <= 7) return "summer";
  return "autumn";
};

const Awning = () => {
  const season = getSeason();
  
  return (
    <div className="awning">
      {[...Array(20)].map((_, i) => (
        <div key={i} className={`stripe ${i % 2 === 0 ? 'blue' : 'white'}`} />
      ))}
    </div>
  );
};

export default Awning;
