const CookiesPolicyPage = () => {
  return (
    <div className="legal-page">
      <div className="legal-content">
        <h1>Політика використання Cookies</h1>
        <p>Останнє оновлення: {new Date().toLocaleDateString('uk-UA')}</p>

        <p>Цей сайт використовує файли cookie для покращення користувацького досвіду.</p>

        <h2>1. Що таке cookies?</h2>
        <p>Це невеликі текстові файли, що зберігаються у вашому браузері.</p>

        <h2>2. Навіщо ми їх використовуємо?</h2>
        <ul>
        <li>Для збереження налаштувань</li>
        <li>Для аналітики відвідуваності</li>
        <li>Для функціонування мови інтерфейсу</li>
        </ul>

        <h2>3. Як керувати cookies?</h2>
        <p>Ви можете змінити налаштування cookies у своєму браузері або вимкнути їх повністю.</p>

      </div>
    </div>
  );
};

export default CookiesPolicyPage;
