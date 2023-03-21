const refs = {
  setCity: document.querySelector('.location-btn__city'), // Встановлення міста
  setLanguage: document.querySelector('.location-btn__language'), // Встановлення мови
  buttonsLanguage: document.querySelectorAll('.location-modal__language-btn'), // Масив кнопок з вибором мови
  buttonsCity: document.querySelectorAll('.location-modal__city-btn'), // Масив кнопок з вибором міста
};

export const selectLanguage = () => {
  refs.buttonsLanguage.forEach(button => {
    button.addEventListener('click', () => {
      refs.buttonsLanguage.forEach(btn => btn.classList.remove('selected'));
      button.classList.add('selected');
    });
  });
};

export const selectCity = () => {
  refs.buttonsCity.forEach(button => {
    button.addEventListener('click', () => {
      refs.buttonsCity.forEach(btn => btn.classList.remove('selected'));
      button.classList.add('selected');
    });
  });
};

export function onChangeLanguageClick(e) {
  const language = e.target;
  if (language.nodeName === 'BUTTON') {
    refs.setLanguage.textContent = language.outerText;
  }
}

export function onChangeCityClick(e) {
  const city = e.target;
  if (city.nodeName === 'BUTTON') {
    refs.setCity.textContent = city.outerText;
  }
}
