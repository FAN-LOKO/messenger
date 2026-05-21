// RU: Простой роутер режимов внутри одного HTML-файла.
// EN: Simple mode router inside a single HTML file.

(() => {
  const buttons = document.querySelectorAll('.mode-link');
  const views = document.querySelectorAll('.view');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((item) => item.classList.remove('active'));
      views.forEach((view) => view.classList.remove('view-active'));

      button.classList.add('active');

      const nextView = document.getElementById(`view-${button.dataset.view}`);
      if (nextView) nextView.classList.add('view-active');
    });
  });
})();
