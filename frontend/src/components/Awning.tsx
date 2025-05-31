const Awning = () => {
  return (
    <div className="awning">
      {[...Array(20)].map((_, i) => (
        <div key={i} className={`stripe ${i % 2 === 0 ? 'red' : 'white'}`} />
      ))}
    </div>
  );
};

export default Awning;
