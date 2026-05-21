// RU: Базовая инициализация приложения, переключение темы и сворачивание боковой панели.
// EN: Base application initialization, theme switching, and sidebar collapse.

(() => {
  const root = document.documentElement;
  const shell = document.querySelector('.app-shell');
  const themeToggle = document.getElementById('themeToggle');
  const sidebarToggle = document.getElementById('sidebarToggle');

  let theme = 'dark';
  root.setAttribute('data-theme', theme);

  const renderThemeToggle = () => {
    if (!themeToggle) return;
    themeToggle.textContent = theme === 'dark' ? '☼' : '☾';
  };

  const renderSidebarToggle = () => {
    if (!sidebarToggle || !shell) return;
    sidebarToggle.textContent = shell.classList.contains('sidebar-collapsed') ? '→' : '←';
  };

  renderThemeToggle();
  renderSidebarToggle();

  themeToggle?.addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', theme);
    renderThemeToggle();
  });

  sidebarToggle?.addEventListener('click', () => {
    if (!shell) return;
    shell.classList.toggle('sidebar-collapsed');
    renderSidebarToggle();
  });

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch(() => {});
    });
  }
})();
