// Polyfill for method forEach
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

// select

document.querySelectorAll('.select').forEach(function (selectWrapper) {
  const selectBtn = selectWrapper.querySelector('.select__button');
  const selectList = selectWrapper.querySelector('.select__list');
  const selectItem = selectList.querySelectorAll('.select__item');
  const selectInput = selectWrapper.querySelector('.select__input');
  const keyCode = {
    Up: 38,
    Down: 40,
  };

  selectBtn.addEventListener('click', function () {
    selectList.classList.toggle('select__list_visible');
    this.classList.toggle('select__button_active');
  });

  selectItem.forEach(function (listItem) {
    listItem.addEventListener('click', function (event) {
      event.stopPropagation();
      selectBtn.innerText = this.innerText;
      selectBtn.focus();
      selectInput.value = this.dataset.value;
      selectList.classList.remove('select__list_visible');
    });
  });

  selectList.addEventListener('keydown', onKeyDown);

  function onKeyDown(event) {
    switch (event.keyCode) {
      case keyCode.Down:
        event.preventDefault();
        focusNextItem();
        break;
      case keyCode.Up:
        event.preventDefault();
        focusPreviousItem();
        break;
    }
  }

  function focusNextItem() {
    const item = document.activeElement;
    if (item.nextElementSibling) {
      activate(item.nextElementSibling);
    }
  }

  function focusPreviousItem() {
    const item = document.activeElement;
    if (item.previousElementSibling) {
      activate(item.previousElementSibling);
    }
  }

  function activate(item) {
    selectItem.forEach(btn => (btn.tabIndex = -1));
    item.tabIndex = 0;
    item.focus();
  }

  selectItem.forEach(function (listItem) {
    listItem.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        selectBtn.innerText = this.innerText;
        selectInput.value = this.dataset.value;
        selectList.classList.remove('select__list_visible');
      }
    });
  });

  document.addEventListener('click', function (event) {
    if (event.target !== selectBtn) {
      selectList.classList.remove('select__list_visible');
      selectBtn.classList.remove('select__button_active');
    }
  });

  selectBtn.addEventListener('keydown', function (event) {
    if (
      event.key === 'Enter' ||
      event.key === 'ArrowDown' ||
      event.key === 'ArrowUp'
    ) {
      selectItem.forEach(function (item) {
        item.focus();
      });
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' || event.key === 'Tab') {
      selectList.classList.remove('select__list_visible');
      selectBtn.classList.remove('select__button_active');
    }
  });
});

// Add file

// document
//   .querySelector('.add-file__input')
//   .addEventListener('change', function (event) {
//     const addFileTitle = document.querySelector('.add-file__title');
//     const evenTarget = event.target.files;
//     const oneFile = (addFileTitle.innerText =
//       'Додані файли: ' + evenTarget[0].name);
//     const secondFile = (addFileTitle.innerText =
//       oneFile + '; ' + evenTarget[1].name);

//     if (evenTarget.length === 0) {
//       return;
//     }
//     if (evenTarget.length === 1) {
//       oneFile;
//     }

//     if (evenTarget.length === 2) {
//       secondFile;
//     }

//     if (evenTarget.length === 3) {
//       addFileTitle.innerText = secondFile + '; ' + evenTarget[2].name;
//     }

//     if (evenTarget.length > 3) {
//       addFileTitle.innerText = 'Нам достатньо трьох файлів :)';
//     }
//   });
