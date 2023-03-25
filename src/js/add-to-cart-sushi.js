import { sushi } from './sushi-object';

const refs = {
  cartContainer: document.querySelector('.cart-items'),
};

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

    // const addCartMarkup = addItemToCart();
    // console.log(addItemToCart());
  }
}

// export function addDomCartMarkup() {
//   const addCartMarkup = addItemToCart();
//   refs.cartContainer.insertAdjacentHTML('afterbegin', addCartMarkup);
// }

// function addItemToCart() {
//   const savedOrder = localStorage.getItem('order');
//   const parsedOrder = JSON.parse(savedOrder);
//   console.log(parsedOrder);

//   const cartMarkup = parsedOrder
//     .map(item => {
//       return `<div>
//   <img src="${item.image}" alt="${item.alt}" />
//   <div>
//     <h2>${item.name}</h2>
//     <p>Вага: ${item.weight} г</p>
//   </div>
//   <div>
//     <p>${item.price} грн</p>
//     <button type="button">-</button>
//     <p>1</p>
//     <button type="button">+</button>
//   </div>
//   <button type="button">
//     <svg width="30" height="30">
//       <use href="./images/symbol-defs.svg#menu-close"></use>
//     </svg>
//   </button>
// </div>`;
//     })
//     .join('');

//   return cartMarkup;
// }
