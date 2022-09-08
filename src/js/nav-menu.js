(() => {
  // let open_button = document.querySelector(".burger--open");
  // let close_button = document.querySelector(".burger--close");
  let burger = document.querySelectorAll('.burger');
  let backdrop = document.querySelector('.page-nav');
  // let page_menu = document.querySelector(".page-menu");
  let body = document.querySelector('body');

  // if (!(open_button && close_button)) return;

  // open_button.addEventListener("click", menu_toggle);
  // close_button.addEventListener("click", menu_toggle);
  burger.forEach(e => {
    e.addEventListener('click', menu_toggle);
  });

  function menu_toggle() {
    backdrop.classList.toggle('is-hidden');
    // page_menu.classList.toggle("is-hidden");
    body.classList.toggle('is-locked');
    if (backdrop.classList.contains('is-hidden') != true) {
      visualViewport.addEventListener('resize', on_resize);
    } else visualViewport.removeEventListener('resize', on_resize);
  }

  function on_resize() {
    if (visualViewport.width >= 1440) menu_toggle();
  }
})();
