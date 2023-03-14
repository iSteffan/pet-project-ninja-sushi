import { sushi } from './js/sushi-object';
import { sushiMarkup } from './js/generate-sushi-cards';

console.log(sushi);

const refs = {
  sectionSushi: document.querySelector('.section-sushi'),
};

refs.sectionSushi.insertAdjacentHTML('beforeend', sushiMarkup);
