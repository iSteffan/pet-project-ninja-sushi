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

    addDomCartMarkup();
  }
}

function addDomCartMarkup() {
  refs.cartContainer.innerHTML = '';
  const addCartMarkup = addItemToCart();
  refs.cartContainer.insertAdjacentHTML('afterbegin', addCartMarkup);
}

function addItemToCart() {
  const savedOrder = localStorage.getItem('order');
  const parsedOrder = JSON.parse(savedOrder);
  //   console.log(parsedOrder);

  const cartMarkup = parsedOrder
    .map(item => {
      return `<div class="cart-item">
                <div class="cart-item__description">
                    <img src="${item.image}" alt="${item.alt}" class="cart-item__image" />
                    <div class="">
                        <h2 class="cart-item__name">${item.name}</h2>
                        <p class="cart-item__weight">Вага: ${item.weight} г</p>
                    </div>
                </div>
                <div class="cart-item__price-wrapper">
                    <p class="cart-item__price">${item.price} грн</p>
                    <button type="button" class="decrease-amount">
                        <svg width="18" height="18" viewBox="0 0 32 32">
                            <path d="M5.333 16c0-0.736 0.597-1.333 1.333-1.333h18.667c0.736 0 1.333 0.597 1.333 1.333s-0.597 1.333-1.333 1.333h-18.667c-0.736 0-1.333-0.597-1.333-1.333z"></path>
                        </svg>
                    </button>
                    <p class="item-count">1</p>
                    <button type="button" class="increase-amount">
                        <svg width="18" height="18" viewBox="0 0 32 32">
                            <path d="M16 5.333c0.736 0 1.333 0.597 1.333 1.333v18.667c0 0.736-0.597 1.333-1.333 1.333s-1.333-0.597-1.333-1.333v-18.667c0-0.736 0.597-1.333 1.333-1.333z"></path>
                            <path d="M5.333 16c0-0.736 0.597-1.333 1.333-1.333h18.667c0.736 0 1.333 0.597 1.333 1.333s-0.597 1.333-1.333 1.333h-18.667c-0.736 0-1.333-0.597-1.333-1.333z"></path>
                        </svg>
                    </button>
                </div>
                <button type="button" class="delete-from-cart-btn">
                    <svg width="16" height="16" viewBox="0 0 32 32">
                        <path d="M23.733 10.304 22.229 8.8l-5.963 5.963L10.303 8.8l-1.504 1.504 5.963 5.963-5.963 5.963 1.504 1.504 5.963-5.963 5.963 5.963 1.504-1.504-5.963-5.963 5.963-5.963z"/>
                    </svg>
                </button>
            </div>`;
    })
    .join('');

  return cartMarkup;
}
