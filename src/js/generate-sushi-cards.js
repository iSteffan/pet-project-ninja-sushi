import { sushi } from './sushi-object';

const refs = {
  sushiCardContainer: document.querySelector('.section-sushi__container'),
  formSushiFilter: document.getElementById('filter-sushi'),
  loadMoreBtn: document.querySelector('.load-more-btn-sushi'),
};

export function addDomSushiMarkup() {
  const sushiMarkup = createSushiMarkupArr(sushi);
  refs.sushiCardContainer.insertAdjacentHTML('afterbegin', sushiMarkup);
}

function createSushiMarkupArr(markupArr) {
  const markup = markupArr
    .map(item => {
      return `<div class="product-card">
              <div>
                <a href="">
                  <img src="${item.image}" alt="${item.alt}" class="sushi-foto"/>
                </a>
                <div class="additional-info">
                  ${item.hit ? `<p class="additional-info__hit">${item.hit}</p>` : ''}
                  ${item.new ? `<p class="additional-info__new">${item.new}</p>` : ''}
                </div>
              </div>
              <div class="product-info">
                <div>
                  <h2 class="product-name">${item.name}</h2>
                  <p class="product-weight">Вага: ${item.weight} г</p>
                  <p class="product-description">${item.description}</p>
                </div>
                <div class="price-wrapper">
                  <p class="product-price">${item.price} грн</p>
                  <button type="button" class="product-favourite-btn">
                    <svg width="24" height="24" viewBox="0 0 40 24" class="favourite-icon">
                      <path fill="#f63" style="fill:var(--color13, #f63)" d="M6.185 6.541c1.101-1.864 2.898-3.173 5.603-3.173 2.707 0 4.356 1.317 5.39 2.695a9.204 9.204 0 0 1 1.343 2.584c.023.072.039.126.048.158l.009.032c0 .001 0 0 0 0a1.685 1.685 0 0 0 3.265-.001s0 .001 0 0l.001-.003-.001.003.008-.03.048-.158a9.16 9.16 0 0 1 1.343-2.584c1.033-1.378 2.683-2.695 5.39-2.695 2.705 0 4.501 1.308 5.603 3.173 1.144 1.936 1.521 4.474 1.157 6.656-.715 4.291-4.437 8.158-8.385 11.082a47.328 47.328 0 0 1-6.796 4.166 47.328 47.328 0 0 1-6.796-4.166c-3.948-2.924-7.67-6.791-8.385-11.082-.364-2.182.013-4.72 1.157-6.656zm14.024 1.88c-1.634.408-1.634.409-1.634.41l.001.003v.002zm0-3.906a11.236 11.236 0 0 0-.337-.473C18.379 2.051 15.818 0 11.788 0 7.756 0 4.921 2.06 3.285 4.827c-1.593 2.695-2.058 6.052-1.58 8.923.946 5.677 5.646 10.231 9.703 13.236a50.74 50.74 0 0 0 7.396 4.524 34.358 34.358 0 0 0 .653.315l.054.025s.002.001.697-1.533l-.695 1.534c.442.2.948.2 1.389 0l-.695-1.534.695 1.534.006-.003.011-.005.039-.018.14-.066a45.219 45.219 0 0 0 2.321-1.199 50.646 50.646 0 0 0 5.588-3.574c4.057-3.005 8.757-7.559 9.703-13.236.478-2.871.013-6.228-1.58-8.923C35.495 2.059 32.659 0 28.627 0c-4.03 0-6.591 2.051-8.084 4.042-.119.158-.231.316-.337.473z"/>>
                  </button>
                  <button type="button" class="product-add-to-cart-btn">
                    <svg width="24" height="24" viewBox="0 0 32 26" class="favourite-icon">
                      <path fill="#00cc2d" style="fill:var(--color12, #00cc2d)" d="M15.998 5.335c.736 0 1.333.597 1.333 1.333v18.667a1.333 1.333 0 0 1-2.666 0V6.668c0-.736.597-1.333 1.333-1.333z"/>
                      <path fill="#00cc2d" style="fill:var(--color12, #00cc2d)" d="M5.335 15.998c0-.736.597-1.333 1.333-1.333h18.667a1.333 1.333 0 0 1 0 2.666H6.668a1.333 1.333 0 0 1-1.333-1.333z"/>    </button>
                </div>
              </div>
            </div>`;
    })
    .join('');

  return markup;
}

// ----------------------------------------------Filter----------------------------------------------

export function selectHandle() {
  refs.loadMoreBtn.style.display = 'none';
  if (refs.formSushiFilter.value === 'name') {
    sushiFilterByName();
  } else if (refs.formSushiFilter.value === 'weight') {
    sushiFilterByWeight();
  } else if (refs.formSushiFilter.value === 'priceUp') {
    sushiFilterByPriceUp();
  } else if (refs.formSushiFilter.value === 'priceDown') {
    sushiFilterByPriceDown();
  }
}

function sushiFilterByName() {
  const sushiByName = sushi.sort((a, b) => a.name.localeCompare(b.name));
  const markup = createSushiMarkupArr(sushiByName);

  addDomSushiMarkupByFilter(markup);
}

function sushiFilterByWeight() {
  const sushiByWeight = sushi.sort((a, b) => a.weight - b.weight);
  const markup = createSushiMarkupArr(sushiByWeight);

  addDomSushiMarkupByFilter(markup);
}

function sushiFilterByPriceUp() {
  const sushiByPriceUp = sushi.sort((a, b) => a.price - b.price);
  const markup = createSushiMarkupArr(sushiByPriceUp);

  addDomSushiMarkupByFilter(markup);
}

function sushiFilterByPriceDown() {
  const sushiByPriceDown = sushi.sort((a, b) => b.price - a.price);
  const markup = createSushiMarkupArr(sushiByPriceDown);

  addDomSushiMarkupByFilter(markup);
}

function addDomSushiMarkupByFilter(callback) {
  refs.sushiCardContainer.innerHTML = '';
  refs.sushiCardContainer.insertAdjacentHTML('afterbegin', callback);
}
