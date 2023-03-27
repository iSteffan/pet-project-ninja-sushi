# Пет проєкт Ninja sushi

Даний проєкт був реалізований згідно макету Figma, який є у вільному доступі.
Деякі фішки були взяті з оригінального сайту https://ninjasushi.com.ua/. Сам
сайт не відповідає макету оскільки був зроблений редизайн. Основна мова макету -
російська. Місцями вносив контент українською. В фінальній версії сайт буде
переведено на українську. Зроблений адаптивний дизайн під мобільні пристрої
(ширина екрану від 375px) та пк (ширина екрану від 1576px)

## Функціонал

Header:

1. Модальне вікно з вибором міста та мови доступне при кліку на будь-яке місце
   кнопки, що являє собою `прапор України`, назву міста `Київ`, та мову `RU`.

Index.html:

1. При завантаженні сторінки перевіряється час користувача і якщо він не в межах
   `10:00 - 21:30` (в налаштуваннях встановлено межі `12:00 - 13:59`) -
   з'являється модальне вікно з бекдропом. Це симулює ситуацію коли користувач
   зайшов на сайт в не робочий час. Він може оформити замовлення, але воно буде
   опрацьовано тільки в робочі години.

Секція "Суші":

Розмітка секції генерується з масиву об'єктів `sushi`.
Для мобільної версії приховано всі картки з суші окрім перших чотирьох та додана кнопка "Дивитись всі позиції", при кліку на яку - відображається решта карток з суші.
Реалізована можливість сортування списку з суші за `назвою`, `вагою`, `ціна за спаданням`, `ціна за зростанням`.
Реалізована можливість додавання товару в корзину:
1. Слухач подій повішаний на контейнер в середину якого генеруються картки суші. 
2. Відслідковується клік кнопки "+". При настанні події шукається картка в якій був здійснений клік - відслідковується назва цієї картки `name` і записується в       новий масив в localStorage, ключ `name`.
3. Кнопка "+" змінює свій вигляд на текст "Додано в кошик".
4. Фільтрується основний масив об'єктів з суші на предмет співпадіння назви з отриманим масивом імен. Створюється новий масив, він записується в localStorage в  ключ `pre-order`. <br />

При натисненні на кнопку кошика:
1. Рендериться розмітка корзини з ключа `pre-order`.
2. Вираховується загальна ціна всіх товарів в корзині.
3. Вішається слухач подій на кнопки "-", "+". Додана можливість змінювати кількість одиниць кожного товару в кошику з перерахунком загальної вартісті.
4. Вішається слухач подій на кнопку "Х" (видалити з корзини). Знаходить картку товару у якій було натиснено "Х". Товар видаляється з розмітки / видаляється з localStorage з ключів `name`, `pre-order` / загальна вартість перераховується / змінюється кнопка "Додано в кошик" на "+".

```
```

- **** -

