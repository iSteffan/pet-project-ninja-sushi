const refs = {
  meditationBtnClose: document.querySelector('.meditation__close-btn'), // Закриваємо модалку з медитацією
  meditationModal: document.querySelector('[data-modal="meditation"]'), // Закриваємо модалку з медитацією
};

// Функція для перевірки часу та виведення модального вікна про медитацію
export function checkMeditationTime() {
  const currentHour = new Date().getHours();

  // Перевіряємо, чи знаходиться час в проміжку між 12:00 і 13:59 та нічого не робимо
  if (currentHour >= 12 && currentHour <= 13) {
    return;
  }
  // Інакше:
  // Показуємо модальне вікно
  refs.meditationModal.classList.remove('hide');

  // Додаємо слухача на кнопку
  refs.meditationBtnClose.addEventListener('click', meditationCloseHandler);
}

function meditationCloseHandler() {
  refs.meditationModal.classList.add('hide');
}
