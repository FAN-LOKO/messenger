// RU: Базовая инициализация приложения и переключение темы.
// EN: Base application initialization and theme switching.

(() => {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');

  let theme = 'dark';
  root.setAttribute('data-theme', theme);

  const renderToggle = () => {
    if (!toggle) return;
    toggle.textContent = theme === 'dark' ? '☼' : '☾';
  };

  renderToggle();

  toggle?.addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', theme);
    renderToggle();
  });

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch(() => {});
    });
  }
})();
