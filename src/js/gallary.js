(() => {
  const backdrop = document.querySelector('.gallary__backdrop');
  const images = document.querySelectorAll('.gallary__image');
  const button_next = document.querySelector('.gallary__btn-next');
  const button_prev = document.querySelector('.gallary__btn-prev');

  const is_surfaced = 'is-surfaced';

  let current_image = null;
  let current_index = null;
  let images_count = 0;

  images.forEach(element => {
    element.addEventListener('click', toggle_gallary);
    element.image_intex = images_count;
    images_count++;
  });

  backdrop.addEventListener('click', toggle_gallary);

  function toggle_gallary(event) {
    if (current_image) {
      target.classList.toggle(is_surfaced);
      target = null;
    } else {
      let target = event.target;
      target.classList.toggle(is_surfaced);
    }
    backdrop.classList.toggle(is_surfaced);
  }

  button_next.addEventListener('click', () => {
    if (!current_image) {
      current_index = 0;
    } else {
      current_image.toggle(is_surfaced);
      current_index++;
      if (current_index >= images_count) current_index = 0;
    }
    current_image = images[current_index];
    current_image.toggle(is_surfaced);
  });

  button_next.addEventListener('click', () => {
    if (!current_image) {
      current_index = images_count - 1;
    } else {
      current_image.toggle(is_surfaced);
      current_index--;
      if (current_index < 0) current_index = images_count - 1;
    }
    current_image = images[current_index];
    current_image.toggle(is_surfaced);
  });
})();
