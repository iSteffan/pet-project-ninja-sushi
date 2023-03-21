// const refs = {
//   loadMoreButton: document.querySelector('.load-more-btn-sushi'),
//   productCards: document.querySelectorAll('.product-card'),
// };
const loadMoreButton = document.querySelector('.load-more-btn-sushi');
const productCards = document.querySelectorAll('.product-card');

// За замовчуванням приховуємо останні чотири картки товару
export function hideSushiCard() {
  for (let i = productCards.length - 1; i > productCards.length - 5; i--) {
    productCards[i].classList.add('product-card--hide');
  }
}

// Обробляємо натискання на кнопку "load-more-btn-sushi"
loadMoreButton.addEventListener('click', loadMoreSushiClick);

export function loadMoreSushiClick() {
  for (
    let i = refs.productCards.length - 1;
    i > refs.productCards.length - 5;
    i--
  ) {
    refs.productCards[i].classList.remove('product-card--hide');
  }
}
