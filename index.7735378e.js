function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequire5ea6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){o[e]=t},t.parcelRequire5ea6=i),i.register("kyEFX",(function(t,n){var o,i;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var c={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)c[t[n]]=e[t[n]]},i=function(e){var t=c[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("kyEFX").register(JSON.parse('{"5ZPII":"index.7735378e.js","cOw6B":"gunkan-krevetka.aeb96a14.jpg","cHOzx":"gunkan-losos.213aad5a.jpg","egXRY":"gunkan-tunec-trufel.d6e2e6ef.jpg","4VUkP":"gunkan-tunec-spicy.21909334.jpg","jwo0E":"nigiri-ugor.384ba582.jpg","hilst":"nigiri-krevetka.548b116c.jpg","3Hsyd":"gunkan-ugor.1ee2dd23.jpg","38ncX":"nigiri-tunec.ce7c4bf9.jpg"}'));var c;c=new URL(i("kyEFX").resolve("cOw6B"),import.meta.url).toString();const r=new URL(c);var a;a=new URL(i("kyEFX").resolve("cHOzx"),import.meta.url).toString();const s=new URL(a);var l;l=new URL(i("kyEFX").resolve("egXRY"),import.meta.url).toString();const d=new URL(l);var u;u=new URL(i("kyEFX").resolve("4VUkP"),import.meta.url).toString();const p=new URL(u);var m;m=new URL(i("kyEFX").resolve("jwo0E"),import.meta.url).toString();const g=new URL(m);var f;f=new URL(i("kyEFX").resolve("hilst"),import.meta.url).toString();const h=new URL(f);var v;v=new URL(i("kyEFX").resolve("3Hsyd"),import.meta.url).toString();const y=new URL(v);var w;w=new URL(i("kyEFX").resolve("38ncX"),import.meta.url).toString();const S=[{name:"Гункан лосось",price:140,weight:80,description:"Лосось, норі, рис, ікра, соус шрірача, японський майонез",image:s,alt:"Гункан лосось",hit:"Hit",new:"New"},{name:"Гункан креветка",price:100,weight:45,description:"Норі, рис, ікра, креветка, соус шрірача, японський майонез",image:r,alt:"Гункан креветка",hit:"",new:"New"},{name:"Гункан з тунцем і трюфелем",price:125,weight:60,description:"Норі, рис, японський майонез, бальзамик, трюфельна сальса, цибуля шніт",image:d,alt:"Гункан з тунцем і трюфелем",hit:"",new:""},{name:"Гункан тунець спайсі",price:165,weight:120,description:"Норі, рис, тунець, соус шрірача, японський майонез, кунжутна олія, цибуля шніт,",image:p,alt:"Гункан тунець спайсі",hit:"",new:""},{name:"Нігірі вугор",price:115,weight:50,description:"Норі, рис, кунжут, cоус унаги, вугор",image:g,alt:"Нігірі вугор",hit:"Hit",new:""},{name:"Нігірі креветка",price:190,weight:232,description:"Норі, рис, кунжут, cоус унаги, креветка",image:h,alt:"Нігірі креветка",hit:"",new:""},{name:"Гункан вугор",price:115,weight:40,description:"норі, рис, вугор, ікра, соус шрірача, японський майонез",image:y,alt:"Гункан вугор",hit:"",new:""},{name:"Нігірі тунець",price:150,weight:120,description:"Рис, тунець",image:new URL(w),alt:"Нігірі тунець",hit:"Hit",new:"New"}],b={sushiCardContainer:document.querySelector(".section-sushi__container"),formSushiSort:document.getElementById("sort-sushi"),loadMoreBtn:document.querySelector(".load-more-btn-sushi")};function L(e){return e.map((e=>`<div class="product-card">\n              <div>\n                <a href="">\n                  <img src="${e.image}" alt="${e.alt}" class="sushi-foto"/>\n                </a>\n                <div class="additional-info">\n                  ${e.hit?`<p class="additional-info__hit">${e.hit}</p>`:""}\n                  ${e.new?`<p class="additional-info__new">${e.new}</p>`:""}\n                </div>\n              </div>\n              <div class="product-info">\n                <div>\n                  <h2 class="product-name">${e.name}</h2>\n                  <p class="product-weight">Вага: ${e.weight} г</p>\n                  <p class="product-description">${e.description}</p>\n                </div>\n                <div class="price-wrapper">\n                  <p class="product-price">${e.price} грн</p>\n                  <button type="button" class="product-favourite-btn">\n                    <svg width="24" height="24" viewBox="0 0 40 24" class="favourite-icon">\n                      <path fill="#f63" style="fill:var(--color13, #f63)" d="M6.185 6.541c1.101-1.864 2.898-3.173 5.603-3.173 2.707 0 4.356 1.317 5.39 2.695a9.204 9.204 0 0 1 1.343 2.584c.023.072.039.126.048.158l.009.032c0 .001 0 0 0 0a1.685 1.685 0 0 0 3.265-.001s0 .001 0 0l.001-.003-.001.003.008-.03.048-.158a9.16 9.16 0 0 1 1.343-2.584c1.033-1.378 2.683-2.695 5.39-2.695 2.705 0 4.501 1.308 5.603 3.173 1.144 1.936 1.521 4.474 1.157 6.656-.715 4.291-4.437 8.158-8.385 11.082a47.328 47.328 0 0 1-6.796 4.166 47.328 47.328 0 0 1-6.796-4.166c-3.948-2.924-7.67-6.791-8.385-11.082-.364-2.182.013-4.72 1.157-6.656zm14.024 1.88c-1.634.408-1.634.409-1.634.41l.001.003v.002zm0-3.906a11.236 11.236 0 0 0-.337-.473C18.379 2.051 15.818 0 11.788 0 7.756 0 4.921 2.06 3.285 4.827c-1.593 2.695-2.058 6.052-1.58 8.923.946 5.677 5.646 10.231 9.703 13.236a50.74 50.74 0 0 0 7.396 4.524 34.358 34.358 0 0 0 .653.315l.054.025s.002.001.697-1.533l-.695 1.534c.442.2.948.2 1.389 0l-.695-1.534.695 1.534.006-.003.011-.005.039-.018.14-.066a45.219 45.219 0 0 0 2.321-1.199 50.646 50.646 0 0 0 5.588-3.574c4.057-3.005 8.757-7.559 9.703-13.236.478-2.871.013-6.228-1.58-8.923C35.495 2.059 32.659 0 28.627 0c-4.03 0-6.591 2.051-8.084 4.042-.119.158-.231.316-.337.473z"/>>\n                  </button>\n                  <button type="button" class="product-add-to-cart-btn">\n                    <span class="btn-cart-text">Додано в кошик</span>\n                    <svg width="24" height="24" viewBox="0 0 32 32" class="add-to-cart-icon">\n                      <path fill="#00cc2d" style="fill:var(--color12, #00cc2d)" d="M15.998 5.335c.736 0 1.333.597 1.333 1.333v18.667a1.333 1.333 0 0 1-2.666 0V6.668c0-.736.597-1.333 1.333-1.333z"/>\n                      <path fill="#00cc2d" style="fill:var(--color12, #00cc2d)" d="M5.335 15.998c0-.736.597-1.333 1.333-1.333h18.667a1.333 1.333 0 0 1 0 2.666H6.668a1.333 1.333 0 0 1-1.333-1.333z"/>    \n                  </button>\n                </div>\n              </div>\n            </div>`)).join("")}function _(e){b.sushiCardContainer.innerHTML="",b.sushiCardContainer.insertAdjacentHTML("afterbegin",e)}const E={btnClose:document.querySelector(".location-modal-window__close-btn"),modal:document.querySelector('[data-modal="location"]'),setCity:document.querySelector(".location-btn__city"),setLanguage:document.querySelector(".location-btn__language"),buttonsLanguage:document.querySelectorAll(".location-modal__language-btn"),buttonsCity:document.querySelectorAll(".location-modal__city-btn"),selectLanguage:document.querySelector(".location-modal__language"),selectCity:document.querySelector(".location-modal__city")};function k(e){const t=e.target;"BUTTON"===t.nodeName&&(E.setLanguage.textContent=t.outerText)}function C(e){const t=e.target;"BUTTON"===t.nodeName&&(E.setCity.textContent=t.outerText)}function H(){E.modal.classList.add("is-hidden")}const R={meditationBtnClose:document.querySelector(".meditation__close-btn"),meditationModal:document.querySelector('[data-modal="meditation"]')};function U(){const e=(new Date).getHours();e>=12&&e<=13||(R.meditationModal.classList.remove("hide"),R.meditationBtnClose.addEventListener("click",F))}function F(){R.meditationModal.classList.add("hide")}let q=[];const x={btnOpen:document.querySelector(".location-btn"),formSushiFilter:document.getElementById("sort-sushi"),sushiContainer:document.querySelector(".section-sushi__container")};document.addEventListener("DOMContentLoaded",(function(){U()})),function(){const e=L(S);b.sushiCardContainer.insertAdjacentHTML("afterbegin",e)}(),x.formSushiFilter.addEventListener("change",(function(){b.loadMoreBtn.style.display="none","name"===b.formSushiSort.value?function(){const e=S.sort(((e,t)=>e.name.localeCompare(t.name)));_(L(e))}():"weight"===b.formSushiSort.value?function(){const e=S.sort(((e,t)=>e.weight-t.weight));_(L(e))}():"priceUp"===b.formSushiSort.value?function(){const e=S.sort(((e,t)=>e.price-t.price));_(L(e))}():"priceDown"===b.formSushiSort.value&&function(){const e=S.sort(((e,t)=>t.price-e.price));_(L(e))}()})),x.sushiContainer.addEventListener("click",(function(e){const t=e.target.closest(".product-add-to-cart-btn");if(t){const e=t.closest(".product-card").querySelector(".product-name"),n=t.closest(".product-card").querySelector(".btn-cart-text"),o=t.closest(".product-card").querySelector(".add-to-cart-icon"),i=e.textContent,c=q.indexOf(i);-1===c?(q.push(i),t.style.backgroundColor="#ccf5d5",n.style.display="block",o.style.display="none"):(q.splice(c,1),t.style.backgroundColor="#f5f5f7",n.style.display="none",o.style.display="block");const r=S.filter((e=>q.includes(e.name)));localStorage.setItem("order",JSON.stringify(r))}})),x.btnOpen.addEventListener("click",(function(){E.modal.classList.remove("is-hidden"),E.btnClose.addEventListener("click",H),E.selectLanguage.addEventListener("click",k),E.selectCity.addEventListener("click",C),E.buttonsLanguage.forEach((e=>{e.addEventListener("click",(()=>{E.buttonsLanguage.forEach((e=>e.classList.remove("selected"))),e.classList.add("selected")}))})),E.buttonsCity.forEach((e=>{e.addEventListener("click",(()=>{E.buttonsCity.forEach((e=>e.classList.remove("selected"))),e.classList.add("selected")}))}))})),function(){const e=document.querySelector(".load-more-btn-sushi"),t=document.querySelectorAll(".product-card:nth-last-child(-n+4)");t.forEach((e=>{e.classList.add("product-card--hide")})),e.addEventListener("click",(function(){t.forEach((e=>{e.classList.remove("product-card--hide")})),e.style.display="none"}))}();
//# sourceMappingURL=index.7735378e.js.map
