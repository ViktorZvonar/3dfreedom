(() => {
  const burger = document.querySelector('.burger');
  const page_menu = document.querySelector('.page-nav');
  const body = document.querySelector('body');

  burger.addEventListener('click', menu_toggle);

  function menu_toggle() {
    page_menu.classList.toggle('is-hidden');
    body.classList.toggle('is-locked');
    if (page_menu.classList.contains('is-hidden') != true) {
      visualViewport.addEventListener('resize', on_resize);
    } else visualViewport.removeEventListener('resize', on_resize);
  }

  function on_resize() {
    if (visualViewport.width >= 1440) menu_toggle();
  }

  // Повесим класс page-nav__link--current на элементы с классом page-nav__link,
  // Если они указывают на текущую страницу.
  const current_page = window.location.pathname;
  document.querySelectorAll('.page-nav__link').forEach(e => {
    if (e.getAttribute('href') == current_page)
      e.classList.add('page-nav__link--current');
  });
})();
