(() => {
  const body = document.querySelector('body');
  const backdrop = document.querySelector('.gallary__backdrop');
  const images = document.querySelectorAll('.gallary__image');
  const button_next = document.querySelector('.gallary__btn-next');
  const button_prev = document.querySelector('.gallary__btn-prev');

  let current_image = null;
  let current_index = null;
  let images_count = 0;

  const is_surfaced = 'is-surfaced';

  images.forEach(element => {
    element.addEventListener('click', toggle_gallary);
    element.image_intex = images_count;
    images_count++;
  });

  backdrop.addEventListener('click', toggle_gallary);

  function toggle_gallary(event) {
    event.stopPropagation();
    if (current_image) {
      current_image.classList.toggle(is_surfaced);
      current_image = null;
    } else {
      current_image = event.target;
      current_image.classList.toggle(is_surfaced);
    }
    backdrop.classList.toggle(is_surfaced);
    body.classList.toggle('is-locked');
  }

  button_next.addEventListener('click', event => {
    event.stopPropagation();
    if (!current_image) {
      current_index = 0;
    } else {
      current_image.classList.toggle(is_surfaced);
      current_index++;
      if (current_index >= images_count) current_index = 0;
    }
    current_image = images[current_index];
    current_image.classList.toggle(is_surfaced);
  });

  button_prev.addEventListener('click', event => {
    event.stopPropagation();
    if (!current_image) {
      current_index = images_count - 1;
    } else {
      current_image.classList.toggle(is_surfaced);
      current_index--;
      if (current_index < 0) current_index = images_count - 1;
    }
    current_image = images[current_index];
    current_image.classList.toggle(is_surfaced);
  });
})();
