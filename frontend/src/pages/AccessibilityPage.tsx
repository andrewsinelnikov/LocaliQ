const AccessibilityPage = () => {
  return (
    <div className="legal-page">
      <div className="legal-content">
        <h1>Доступність</h1>
        <p>Останнє оновлення: {new Date().toLocaleDateString('uk-UA')}</p>

        <p>Ми прагнемо зробити LocaliQ доступним для всіх користувачів, незалежно від особливостей їхнього сприйняття.</p>

        <h2>Що ми робимо:</h2>
        <ul>
        <li>Використовуємо читабельні шрифти</li>
        <li>Контрастні кольори</li>
        <li>Зрозумілу навігацію</li>
        <li>Адаптивну верстку</li>
        </ul>

        <p>Якщо ви стикнулися з проблемою доступності — напишіть нам на <a href="mailto:access@localiq.ua">access@localiq.ua</a></p>
      </div>
    </div>
  );
};

export default AccessibilityPage;
