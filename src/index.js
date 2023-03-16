import { sushiMarkup } from './js/generate-sushi-cards';

const refs = {
  sushiCardContainer: document.querySelector('.section-sushi__container'),
  loadSushiBtn: document.querySelector('.load-more-btn-sushi'),
};

// Вставляємо згенеровану розмітку карток суші в DOM
refs.sushiCardContainer.insertAdjacentHTML('afterbegin', sushiMarkup);

refs.loadSushiBtn.addEventListener('click', onLoadMoreSushiClick);

function onLoadMoreSushiClick(e) {
  // const productCard = document.querySelector('.additional-info__new');
  // // productCard.style.display = block;
  // productCard.style.backgroundColor = 'teal';
  // console.log(e);
}
