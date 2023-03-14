import { sushi } from './sushi-object';

export const sushiMarkup = sushi
  .map(item => {
    return `<div>
  <div>
    <a href="">
        <img src=${item.image} alt="${item.alt}" class="sushi-foto"/>
    </a>
  </div>
  <div>
    <p></p>
    <p></p>
  </div>
  <div></div>
  <div>
    <h2>${item.name}</h2>
    <p>Вага: ${item.weight} г</p>
    <p>${item.description}</p>
  </div>
  <div>
    <p>${item.price} грн</p>
    <button type="button"></button>
    <button type="button"></button>
  </div>
</div>`;
  })
  .join('');
