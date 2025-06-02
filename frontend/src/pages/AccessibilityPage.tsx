const AccessibilityPage = () => {
  return (
    <div className="legal-page">
      <div className="legal-content">
        <h1>Доступність</h1>
        <p>Останнє оновлення: {new Date().toLocaleDateString('uk-UA')}</p>

        <p>[Тут можна вказати, які заходи вжито для забезпечення доступності контенту]</p>
      </div>
    </div>
  );
};

export default AccessibilityPage;
