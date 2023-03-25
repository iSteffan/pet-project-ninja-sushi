import { sushi } from './sushi-object';

let nameArr = [];

export function addToCartArr(e) {
  const button = e.target.closest('.product-add-to-cart-btn');
  if (button) {
    const nameElement = button.closest('.product-card').querySelector('.product-name');
    const addToCartText = button.closest('.product-card').querySelector('.btn-cart-text');
    const addToCartIcon = button
      .closest('.product-card')
      .querySelector('.add-to-cart-icon');

    const name = nameElement.textContent;
    const index = nameArr.indexOf(name);

    if (index === -1) {
      nameArr.push(name);
      button.style.backgroundColor = '#ccf5d5';
      addToCartText.style.display = 'block';
      addToCartIcon.style.display = 'none';
    } else {
      nameArr.splice(index, 1);
      button.style.backgroundColor = '#f5f5f7';
      addToCartText.style.display = 'none';
      addToCartIcon.style.display = 'block';
    }

    const orderSushi = sushi.filter(item => nameArr.includes(item.name));
    // console.log(filteredSushi);

    localStorage.setItem('order', JSON.stringify(orderSushi));
  }
}
