// Створюю для кожної картинки екземпляр класу URL (відповідно до доків парселя)
//та вношу цей екземпляр як властивість у масив об'єктів (якщо прописати просто шлях то картинка грузиться як текст)

const gunkanKrevetkaURL = new URL(
  '../images/sushi/gunkan-krevetka.jpg',
  import.meta.url
);
const gunkanLososURL = new URL(
  '../images/sushi/gunkan-losos.jpg',
  import.meta.url
);
const gunkanTunecTrufelURL = new URL(
  '../images/sushi/gunkan-tunec-trufel.jpg',
  import.meta.url
);
const gunkanTunecSpicyURL = new URL(
  '../images/sushi/gunkan-tunec-spicy.jpg',
  import.meta.url
);
const nigiriVygorURL = new URL(
  '../images/sushi/nigiri-ugor.jpg',
  import.meta.url
);
const nigiriVygor2URL = new URL(
  '../images/sushi/nigiri-ugor2.jpg',
  import.meta.url
);
const gunkanVygorURL = new URL(
  '../images/sushi/gunkan-ugor.jpg',
  import.meta.url
);
const nigiriTunecURL = new URL(
  '../images/sushi/nigiri-tunec.jpg',
  import.meta.url
);

export const sushi = [
  {
    name: 'Гункан лосось',
    price: 110,
    weight: 40,
    description: 'Лосось, норі, рис, ікра, соус шрірача, японський майонез',
    image: gunkanLososURL,
    alt: 'Гункан лосось',
    hit: 'Hit',
    new: 'New',
  },
  {
    name: 'Гункан креветка',
    price: 100,
    weight: 40,
    description: 'Норі, рис, ікра, креветка, соус шрірача, японський майонез',
    image: gunkanKrevetkaURL,
    alt: 'Гункан креветка',
    hit: '',
    new: 'New',
  },
  {
    name: 'Гункан з тунцем і трюфелем',
    price: 135,
    weight: 40,
    description:
      'Норі, рис, японський майонез, бальзамик, трюфельна сальса, цибуля шніт',
    image: gunkanTunecTrufelURL,
    alt: 'Гункан з тунцем і трюфелем',
    hit: '',
    new: '',
  },
  {
    name: 'Гункан тунець спайсі',
    price: 125,
    weight: 40,
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
    weight: 40,
    description: 'Норі, рис, кунжут, cоус унаги, вугор',
    image: nigiriVygorURL,
    alt: 'Нігірі вугор',
    hit: 'Hit',
    new: '',
  },
  {
    name: 'Нігірі вугор',
    price: 190,
    weight: 232,
    description: 'Норі, рис, кунжут, cоус унаги, вугор',
    image: nigiriVygor2URL,
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
    price: 190,
    weight: 40,
    description: 'Рис, тунець',
    image: nigiriTunecURL,
    alt: 'Нігірі тунець',
    hit: '',
    new: '',
  },
];
