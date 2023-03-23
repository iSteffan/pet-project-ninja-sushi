export function loadMoreSushi() {
  const loadMoreBtn = document.querySelector('.load-more-btn-sushi');

  // Отримуємо посилання на останні 4 елементи з класом product-card
  const productCards = document.querySelectorAll('.product-card:nth-last-child(-n+4)');

  // Приховуємо останні 4 елементи
  productCards.forEach(card => {
    card.classList.add('product-card--hide');
  });

  // Додаємо обробник події на кнопку load more
  loadMoreBtn.addEventListener('click', function () {
    // Показуємо останні 4 елементи
    productCards.forEach(card => {
      card.classList.remove('product-card--hide');
    });
    loadMoreBtn.style.display = 'none';
  });
}
