(() => {
  const body = document.querySelector('body');
  const backdrop = document.querySelector('.gallary__backdrop');
  const images = document.querySelectorAll('.gallary__image');
  const button_next = document.querySelector('.gallary__btn-next');
  const button_prev = document.querySelector('.gallary__btn-prev');

  let current_image = null;
  let current_index = null;
  let images_count = 0;

  const IS_FIXED = 'is-fixed';
  const IS_SURFACED = 'is-surfaced';

  images.forEach(element => {
    element.addEventListener('click', toggle_gallary);
    element.image_intex = images_count;
    images_count++;
  });

  backdrop.addEventListener('click', toggle_gallary);

  function toggle_gallary(event) {
    event.stopPropagation();
    if (current_image) {
      desurface(current_image);
      current_image = null;
    } else {
      current_image = event.target;
      current_index = current_image.image_intex;
      surface(current_image);
    }
    backdrop.classList.toggle(IS_SURFACED);
    body.classList.toggle('is-locked');
  }

  button_next.addEventListener('click', event => {
    event.stopPropagation();
    if (!current_image) {
      current_index = 0;
    } else {
      desurface(current_image);
      current_index++;
      if (current_index >= images_count) current_index = 0;
    }
    current_image = images[current_index];
    surface(current_image);
  });

  button_prev.addEventListener('click', event => {
    event.stopPropagation();
    if (!current_image) {
      current_index = images_count - 1;
    } else {
      desurface(current_image);
      current_index--;
      if (current_index < 0) current_index = images_count - 1;
    }
    current_image = images[current_index];
    surface(current_image);
  });

  function surface(image) {
    image.style.setProperty('--top', `${image.y}px`);
    image.style.setProperty('--left', `${image.x}px`);
    image.style.setProperty('--width', `${image.width}px`);
    image.style.setProperty('--height', `${image.height}px`);
    image.classList.add(IS_FIXED);
    setTimeout(() => {
      image.classList.add(IS_SURFACED);
    }, 10);
  }

  function desurface(image) {
    image.classList.remove(IS_SURFACED);
    setTimeout(() => {
      image.classList.remove(IS_FIXED);
    }, 250);
  }
})();
