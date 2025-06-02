const CookiesPolicyPage = () => {
  return (
    <div className="legal-page">
      <div className="legal-content">
        <h1>Політика використання Cookies</h1>
        <p>Останнє оновлення: {new Date().toLocaleDateString('uk-UA')}</p>

        <p>[Тут описано, які файли cookie використовуються, навіщо та як ними управляти]</p>
      </div>
    </div>
  );
};

export default CookiesPolicyPage;
