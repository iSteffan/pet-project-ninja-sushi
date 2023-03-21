const refs = {
  modal: document.querySelector('[data-modal="location"]'), // Модалка з вибором мови/міста
  setCity: document.querySelector('.location-btn__city'), // Встановлення міста
  setLanguage: document.querySelector('.location-btn__language'), // Встановлення мови
  buttonsLanguage: document.querySelectorAll('.location-modal__language-btn'), // Масив кнопок з вибором мови
  buttonsCity: document.querySelectorAll('.location-modal__city-btn'), // Масив кнопок з вибором міста
  selectLanguage: document.querySelector('.location-modal__language'), // Кнопка з вибором мови
  selectCity: document.querySelector('.location-modal__city'), // Кнопка з вибором міста
};

const selectLanguage = () => {
  refs.buttonsLanguage.forEach(button => {
    button.addEventListener('click', () => {
      refs.buttonsLanguage.forEach(btn => btn.classList.remove('selected'));
      button.classList.add('selected');
    });
  });
};

const selectCity = () => {
  refs.buttonsCity.forEach(button => {
    button.addEventListener('click', () => {
      refs.buttonsCity.forEach(btn => btn.classList.remove('selected'));
      button.classList.add('selected');
    });
  });
};

function onChangeLanguageClick(e) {
  const language = e.target;
  if (language.nodeName === 'BUTTON') {
    refs.setLanguage.textContent = language.outerText;
  }
}

function onChangeCityClick(e) {
  const city = e.target;
  if (city.nodeName === 'BUTTON') {
    refs.setCity.textContent = city.outerText;
  }
}

export function openModalLocation() {
  //  Змінюємо місто і мову у хедері при натисканні на кнопки у модальному вікні
  refs.selectLanguage.addEventListener('click', onChangeLanguageClick);
  refs.selectCity.addEventListener('click', onChangeCityClick);

  selectLanguage(); //Змінюємо фон вибраної кнопки мови у модальному вікні
  selectCity(); //Змінюємо фон вибраної кнопки міста у модальному вікні
  refs.modal.classList.remove('is-hidden');
}

export function closeModalLocation() {
  refs.modal.classList.add('is-hidden');
}
