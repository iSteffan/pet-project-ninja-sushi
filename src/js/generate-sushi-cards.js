import { sushi } from './sushi-object';
// import { sushi } from '../images/symbol-defs.svg';

export const sushiMarkup = sushi
  .map(item => {
    return `<div class="product-card">
  <div>
    <a href="">
        <img src="${item.image}" alt="${item.alt}" class="sushi-foto"/>
    </a>
  </div>
  <div>
    <p></p>
    <p></p>
  </div>
  <div></div>
  <div>
    <h2 class="product-name">${item.name}</h2>
    <p class="product-weight">Вага: ${item.weight} г</p>
    <p class="product-description">${item.description}</p>
  </div>
  <div>
    <p class="product-price">${item.price} грн</p>
    <button type="button" class="product-favourite">
      <svg width="40" height="40" class="">
      <use href="./images/symbol-defs.svg#add-to-favourite"></use>
    </button>
    <button type="button" class="product-add-to-cart"></button>
  </div>
</div>`;
  })
  .join('');
