const TermsPage = () => {
  return (
    <div className="legal-page">
      <div className="legal-content">
        <h1>Умови користування</h1>
        <p>Останнє оновлення: {new Date().toLocaleDateString('uk-UA')}</p>

        <p>[Тут розміщується текст умов користування платформою LocaliQ]</p>
      </div>
    </div>
  );
};

export default TermsPage;
