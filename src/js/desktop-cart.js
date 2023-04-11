import { sushi } from './sushi-object';

const refs = {
  cartContainer: document.querySelector('.cart-items'),
  increaseAmountBtn: document.querySelectorAll('.increase-amount'),
  decreaseAmountBtn: document.querySelectorAll('.decrease-amount'),
  itemAmount: document.querySelectorAll('.item-count'),
  totalPrice: document.querySelectorAll('.money-to-pay__value'),
  cart: document.querySelector('[data-modal="cart"]'),
  closeCartBtn: document.querySelector('.cart__close-btn'),
};

export function addToCart(e) {
  const nameArray = localStorage.getItem('array');
  const parsedNameArray = JSON.parse(nameArray);

  // Створюємо масив імен товарів доданих в корзину
  // Перевіряємо чи клікнули по кнопці, тоді зчитуємо ім'я товару в картці
  const button = e.target.closest('.product-add-to-cart-btn');
  if (button) {
    const nameElement = button.closest('.product-card').querySelector('.product-name');
    const addToCartText = button.closest('.product-card').querySelector('.btn-cart-text');
    const addToCartIcon = button
      .closest('.product-card')
      .querySelector('.add-to-cart-icon');

    // Перевіряємо чи таке ім'я товару є в масиві, якщо немає - додаємо / в іншому випадку - видаляємо
    // Змінюємо вигляд кнопки
    const name = nameElement.textContent;
    const index = parsedNameArray.indexOf(name);

    if (index === -1) {
      parsedNameArray.push(name);
      button.style.backgroundColor = '#00cc2d';
      addToCartText.style.display = 'block';
      addToCartIcon.style.display = 'none';
    } else {
      parsedNameArray.splice(index, 1);
      button.style.backgroundColor = '#f5f5f7';
      addToCartText.style.display = 'none';
      addToCartIcon.style.display = 'block';
    }

    // Фільтруємо масив об'єктів з суші по іменах товарів доданих до корзини. Додаємо новий масив в local storage
    addItemToStorage(sushi, parsedNameArray);

    // Оновлюємо масив з іменами доданими в кошик для наступного кліку
    localStorage.setItem('array', JSON.stringify(parsedNameArray));
  }
}

// Функція відкриття десктопної корзини
export function openCart() {
  refs.cart.classList.remove('hide-cart');

  refs.closeCartBtn.addEventListener('click', () => {
    refs.cart.classList.add('hide-cart');
  });

  //   Рендеримо розмітку корзини
  addDomCartMarkup();

  // Рахує вартість товару в корзині
  calcTotalPriceDesktop();
  // }

  // Видаляє товар з корзини / перераховує загальну вартість
  deleteFromCart();

  // Ховаємо корзину якщо змінюється viewport
  window.matchMedia('(max-width: 1575px)').addEventListener('change', e => {
    if (!e.matches) return;
    refs.cart.classList.add('hide-cart');
  });
}

// ---------------------------------------------------Функції---------------------------------------------------
// Записуємо обрані товари у сховище
function addItemToStorage(object, array) {
  const orderSushi = object.filter(item => array.includes(item.name));
  localStorage.setItem('pre-order', JSON.stringify(orderSushi));
}

//   Рендеримо розмітку корзини
function addDomCartMarkup() {
  refs.cartContainer.innerHTML = '';
  // Перевіряємо чи розмітка не пуста
  if (addItemToCart()) {
    const addCartMarkup = addItemToCart();
    refs.cartContainer.insertAdjacentHTML('afterbegin', addCartMarkup);
  }
}

// Рахує вартість товару в корзині
function calcTotalPriceDesktop() {
  // Рахуємо загальну суму товарів в корзині
  const cartItems = document.querySelectorAll('.cart-item');
  const decreaseButtons = document.querySelectorAll('.decrease-amount');
  const increaseButtons = document.querySelectorAll('.increase-amount');
  const itemCounts = document.querySelectorAll('.item-count'); // кількість одиниць товару
  const totalPrice = document.querySelector('.money-to-pay__value');

  // обчислюємо початкову загальну вартість
  let currentTotalPrice = 0;
  cartItems.forEach(item => {
    const price = Number(item.querySelector('.price-value').textContent);
    const count = Number(item.querySelector('.item-count').textContent);
    currentTotalPrice += price * count;
  });
  totalPrice.textContent = currentTotalPrice;

  // додаємо обробники подій на кнопки збільшення та зменшення кількості товару
  decreaseButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      let count = Number(itemCounts[index].textContent);
      if (count > 1) {
        count--;
        itemCounts[index].textContent = count;
        updateTotalPrice();
      }
    });
  });

  increaseButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      let count = Number(itemCounts[index].textContent);
      count++;
      itemCounts[index].textContent = count;
      updateTotalPrice();
    });
  });
}

// Видаляє товар з корзини / перераховує загальну вартість
function deleteFromCart() {
  // Слухаємо кнопки
  const deleteButtons = document.querySelectorAll('.delete-from-cart-btn');

  deleteButtons.forEach(button => {
    button.addEventListener('click', event => {
      // Витягуємо значення зі сховища
      const savedOrder = localStorage.getItem('pre-order');
      const parsedOrder = JSON.parse(savedOrder);

      const nameArray = localStorage.getItem('array');
      const parsedNameArray = JSON.parse(nameArray);

      // Знаходимо на якій кнопці був клік
      const deleteBtn = event.target.closest('.delete-from-cart-btn');
      const element = deleteBtn.closest('.cart-item');

      // Знаходимо ім'я елемента на кнопку якого натиснули
      const nameElement = element.closest('.cart-item').querySelector('.cart-item__name');
      const name = nameElement.textContent;

      // Видаляємо з масиву зі сховища елемент
      const orderSushi = parsedOrder.filter(item => item.name !== name);
      const orderNameArray = parsedNameArray.filter(item => item !== name);

      // Оновлюємо сховище
      localStorage.setItem('pre-order', JSON.stringify(orderSushi));
      localStorage.setItem('array', JSON.stringify(orderNameArray));
      changeBtn(deleteBtn);

      // Видаляємо елемент з розмітки
      element.remove();

      // Перераховуємо загальну вартість
      updateTotalPrice();
    });
  });
}

// Видаляючи товар з кошика повертаємо кнопку "додано в кошик в початковий стан"
export function changeBtn(element) {
  const nameElement = element.closest('.cart-item').querySelector('.cart-item__name');

  // отримання всіх елементів з класом "product-card"
  const productCards = document.querySelectorAll('.product-card');

  // ітерація по всіх елементах
  productCards.forEach(card => {
    const productName = card.querySelector('.product-name').textContent;

    // перевірка, чи текстовий вміст співпадає зі шуканим ім'ям
    if (productName === nameElement.textContent) {
      const buttonText = card.querySelector('.btn-cart-text');
      const button = card.querySelector('.product-add-to-cart-btn');
      const icon = card.querySelector('.add-to-cart-icon');

      buttonText.style.display = 'none';
      button.style.backgroundColor = '#f5f5f7';
      icon.style.display = 'block';
    }
  });
}

// Оновлюємо загальну вартість при збільшенні кількості одного товару
function updateTotalPrice() {
  const cartItems = document.querySelectorAll('.cart-item');
  const totalPrice = document.querySelector('.money-to-pay__value');

  let newTotalPrice = 0;
  cartItems.forEach(item => {
    const price = Number(item.querySelector('.price-value').textContent);
    const count = Number(item.querySelector('.item-count').textContent);
    newTotalPrice += price * count;
  });
  totalPrice.textContent = newTotalPrice;
}

// Читаємо дані зі сховища та генеруємо розмітку корзини
export function addItemToCart() {
  const savedOrder = localStorage.getItem('pre-order');
  const parsedOrder = JSON.parse(savedOrder);
  // Генеруємо розмітку тільки якщо щось є в масиві
  if (parsedOrder) {
    const cartMarkup = parsedOrder
      .map(item => {
        return `<div class="cart-item">
                <div class="cart-item__description">
                    <img src="${item.image}" alt="${item.alt}" class="cart-item__image" />
                    <div class="cart-item__data">
                      <div class="">
                        <h2 class="cart-item__name">${item.name}</h2>
                        <p class="cart-item__weight">Вага: ${item.weight} г</p>
                      </div>
                      <div class="cart-item__price-wrapper">
                        <p class="cart-item__price"><span class="price-value">${item.price}</span> грн</p>
                        <div class="change-amount_wrapper">
                          <button type="button" class="decrease-amount">
                            <svg width="18" height="18" viewBox="0 0 32 32" class="decrease-amount__icon">
                              <path d="M5.333 16c0-0.736 0.597-1.333 1.333-1.333h18.667c0.736 0 1.333 0.597 1.333 1.333s-0.597 1.333-1.333 1.333h-18.667c-0.736 0-1.333-0.597-1.333-1.333z"></path>
                            </svg>
                          </button>
                          <p class="item-count">1</p>
                          <button type="button" class="increase-amount" class="increase-amount__icon">
                          <svg width="18" height="18" viewBox="0 0 32 32">
                            <path d="M16 5.333c0.736 0 1.333 0.597 1.333 1.333v18.667c0 0.736-0.597 1.333-1.333 1.333s-1.333-0.597-1.333-1.333v-18.667c0-0.736 0.597-1.333 1.333-1.333z"></path>
                            <path d="M5.333 16c0-0.736 0.597-1.333 1.333-1.333h18.667c0.736 0 1.333 0.597 1.333 1.333s-0.597 1.333-1.333 1.333h-18.667c-0.736 0-1.333-0.597-1.333-1.333z"></path>
                          </svg>
                          </button>
                        </div>
                      </div>
                    </div>
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
}
