// Створюю для кожної картинки екземпляр класу URL (відповідно до доків парселя)
//та вношу цей екземпляр як властивість у масив об'єктів (якщо прописати просто шлях то картинка грузиться як текст)

const gunkanKrevetkaURL = new URL('../images/sushi/gunkan-krevetka.jpg', import.meta.url);
const gunkanLososURL = new URL('../images/sushi/gunkan-losos.jpg', import.meta.url);
const gunkanTunecTrufelURL = new URL(
  '../images/sushi/gunkan-tunec-trufel.jpg',
  import.meta.url
);
const gunkanTunecSpicyURL = new URL(
  '../images/sushi/gunkan-tunec-spicy.jpg',
  import.meta.url
);
const nigiriVygorURL = new URL('../images/sushi/nigiri-ugor.jpg', import.meta.url);
const nigiriKrevetkaURL = new URL('../images/sushi/nigiri-krevetka.jpg', import.meta.url);
const gunkanVygorURL = new URL('../images/sushi/gunkan-ugor.jpg', import.meta.url);
const nigiriTunecURL = new URL('../images/sushi/nigiri-tunec.jpg', import.meta.url);

export const sushi = [
  {
    name: 'Гункан лосось',
    price: 140,
    weight: 80,
    description: 'Лосось, норі, рис, ікра, соус шрірача, японський майонез',
    image: gunkanLososURL,
    alt: 'Гункан лосось',
    hit: 'Hit',
    new: 'New',
  },
  {
    name: 'Гункан креветка',
    price: 100,
    weight: 45,
    description: 'Норі, рис, ікра, креветка, соус шрірача, японський майонез',
    image: gunkanKrevetkaURL,
    alt: 'Гункан креветка',
    hit: '',
    new: 'New',
  },
  {
    name: 'Гункан з тунцем і трюфелем',
    price: 125,
    weight: 60,
    description: 'Норі, рис, японський майонез, бальзамик, трюфельна сальса, цибуля шніт',
    image: gunkanTunecTrufelURL,
    alt: 'Гункан з тунцем і трюфелем',
    hit: '',
    new: '',
  },
  {
    name: 'Гункан тунець спайсі',
    price: 165,
    weight: 120,
    description:
      'Норі, рис, тунець, соус шрірача, японський майонез, кунжутна олія, цибуля шніт,',
    image: gunkanTunecSpicyURL,
    alt: 'Гункан тунець спайсі',
    hit: '',
    new: '',
  },
  {
    name: 'Нігірі вугор',
    price: 115,
    weight: 50,
    description: 'Норі, рис, кунжут, cоус унаги, вугор',
    image: nigiriVygorURL,
    alt: 'Нігірі вугор',
    hit: 'Hit',
    new: '',
  },
  {
    name: 'Нігірі креветка',
    price: 190,
    weight: 232,
    description: 'Норі, рис, кунжут, cоус унаги, вугор',
    image: nigiriKrevetkaURL,
    alt: 'Нігірі вугор',
    hit: '',
    new: '',
  },
  {
    name: 'Гункан вугор',
    price: 115,
    weight: 40,
    description: 'норі, рис, вугор, ікра, соус шрірача, японський майонез',
    image: gunkanVygorURL,
    alt: 'Гункан вугор',
    hit: '',
    new: '',
  },
  {
    name: 'Нігірі тунець',
    price: 150,
    weight: 120,
    description: 'Рис, тунець',
    image: nigiriTunecURL,
    alt: 'Нігірі тунець',
    hit: 'Hit',
    new: 'New',
  },
];
