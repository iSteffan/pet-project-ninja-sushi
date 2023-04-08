import { changeBtn, addItemToCart } from './desktop-cart';

const refs = {
  cartMobileContainer: document.querySelector('.cart-mobile-items'),
  increaseAmountBtn: document.querySelectorAll('.increase-amount'),
  decreaseAmountBtn: document.querySelectorAll('.decrease-amount'),
  itemAmount: document.querySelectorAll('.item-count'),
  cart: document.querySelector('[data-modal="cart"]'),
  mobileCart: document.querySelector('.js-menu-cart-container'), // Контейнер з модалкою мобільної корзини
  closeMenuCartBtn: document.querySelector('.js-close-menu-cart'), // Кнопка закриття корзини в мобільному меню
};

export function openMobileCart() {
  refs.mobileCart.classList.add('is-open');

  refs.closeMenuCartBtn.addEventListener('click', () => {
    refs.mobileCart.classList.remove('is-open');
  });

  //   Рендеримо розмітку корзини
  addDomCartMarkup();

  // Рахує вартість товару в корзині
  calcTotalPrice();

  // Видаляє товар з корзини / перераховує загальну вартість
  deleteFromCart();

  // Закриває корзину якщо vieport став розміром з desktop
  window.matchMedia('(min-width: 1575px)').addEventListener('change', e => {
    if (!e.matches) return;
    refs.mobileCart.classList.remove('is-open');
    bodyScrollLock.enableBodyScroll(document.body);
  });
}

// ---------------------------------------------------Функції---------------------------------------------------

//   Рендеримо розмітку корзини
function addDomCartMarkup() {
  refs.cartMobileContainer.innerHTML = '';
  if (addItemToCart()) {
    const addCartMarkup = addItemToCart();
    refs.cartMobileContainer.insertAdjacentHTML('afterbegin', addCartMarkup);
  }
}

// Рахує вартість товару в корзині
function calcTotalPrice() {
  // Рахуємо загальну суму товарів в корзині
  const cartItems = document.querySelectorAll('.cart-item');
  const decreaseButtons = document.querySelectorAll('.decrease-amount');
  const increaseButtons = document.querySelectorAll('.increase-amount');
  const itemCounts = document.querySelectorAll('.item-count');
  const totalPrice = document.querySelector('.money-to-pay__value-mobile');

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
      // Видаляючи товар з кошика повертаємо кнопку "додано в кошик в початковий стан"
      changeBtn(deleteBtn);

      // Видаляємо елемент з розмітки
      element.remove();

      // Перераховуємо загальну вартість
      updateTotalPrice();
    });
  });
}

// Оновлюємо загальну вартість при збільшенні кількості одного товару
function updateTotalPrice() {
  const cartItems = document.querySelectorAll('.cart-item');
  const totalPrice = document.querySelector('.money-to-pay__value-mobile');

  let newTotalPrice = 0;
  cartItems.forEach(item => {
    const price = Number(item.querySelector('.price-value').textContent);
    const count = Number(item.querySelector('.item-count').textContent);
    newTotalPrice += price * count;
  });
  totalPrice.textContent = newTotalPrice;
}
