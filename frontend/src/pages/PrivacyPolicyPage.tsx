const PrivacyPolicyPage = () => {
  return (
    <div className="legal-page">
      <div className="legal-content">
        <h1>Політика конфіденційності</h1>
        <p>Останнє оновлення: {new Date().toLocaleDateString('uk-UA')}</p>

        <p>[Тут розміщується опис того, як обробляються особисті дані користувачів]</p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
