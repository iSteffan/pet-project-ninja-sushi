const refs = {
  meditationBtnClose: document.querySelector('.meditation__close-btn'), // Закриваємо модалку з медитацією
  meditationModal: document.querySelector('[data-modal="meditation"]'), // Закриваємо модалку з медитацією
};

// Функція для перевірки часу та виведення модального вікна про медитацію
export function checkMeditationTime() {
  //Зчитуємо дані зі сховища
  const visited = localStorage.getItem('visited');
  const parsedVisited = JSON.parse(visited);

  const currentHour = new Date().getHours();

  // Перевіряємо, чи знаходиться час в проміжку між 12:00 і 13:59 та нічого не робимо
  if (currentHour >= 12 && currentHour <= 13) {
    return;
  }

  // Інакше:
  // Виконуємо код нижче тільки, якщо це перший захід на сторінку та у сховищі немає ключа 'visited'
  if (!parsedVisited) {
    // Створюємо ключ, таким чином, якщо користувач вже відвідував сторінку то при наступному перезавантаженні
    // він не побачить модальне вікно
    let isVisited = true;
    localStorage.setItem('visited', JSON.stringify(isVisited));

    // Показуємо модальне вікно
    refs.meditationModal.classList.remove('hide');

    // Додаємо слухача на кнопку
    refs.meditationBtnClose.addEventListener('click', meditationCloseHandler);
  }
}

function meditationCloseHandler() {
  refs.meditationModal.classList.add('hide');
}
