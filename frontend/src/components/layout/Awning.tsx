const getSeason = () => {
  const month = new Date().getMonth();
  if (month <= 1 || month === 11) return "winter";
  if (month <= 4) return "spring";
  if (month <= 7) return "summer";
  return "autumn";
};

const Awning = () => {
  const season = getSeason();

  return (
    <div className={`awning spring`}>
      {[...Array(20)].map((_, i) => (
        <div key={i} className={`stripe stripe${i % 2 === 0 ? "1" : "2"}`} />
      ))}
    </div>
  );
};

export default Awning;
