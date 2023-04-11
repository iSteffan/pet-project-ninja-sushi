// Створюю для кожної картинки екземпляр класу URL (відповідно до доків парселя)
//та вношу цей екземпляр як властивість у масив об'єктів (якщо прописати просто шлях то картинка грузиться як текст)

const filadelfiaKomboURL = new URL(
  '../images/roll/filadelfia-kombo.jpg',
  import.meta.url
);
const filadelfiaLososURL = new URL(
  '../images/roll/filadelfia-losos.jpg',
  import.meta.url
);
const filadelfiaVygorURL = new URL(
  '../images/roll/filadelfia-vygor.jpg',
  import.meta.url
);
const friedPrawnURL = new URL('../images/roll/fried-prawn.jpg', import.meta.url);
const jamamotoURL = new URL('../images/roll/jamamoto.jpg', import.meta.url);
const kratosURL = new URL('../images/roll/kratos.jpg', import.meta.url);
const lososCheeseURL = new URL('../images/roll/losos-cheese.jpg', import.meta.url);
const mikasaURL = new URL('../images/roll/mikasa.jpg', import.meta.url);

export const roll = [
  {
    name: 'Філадельфія з лососем',
    price: 410,
    weight: 320,
    description: 'лосось, норі, огірок, рис, сир вершковий',
    image: filadelfiaLososURL,
    alt: 'Філадельфія з лососем',
    hit: 'Hit',
    new: 'New',
  },
  {
    name: 'Філадельфія з вугрем',
    price: 455,
    weight: 320,
    description: 'норі, огірок, рис, сир вершковий, кунжут, cоус унаги, вугор',
    image: filadelfiaVygorURL,
    alt: 'Філадельфія з вугрем',
    hit: 'Hit',
    new: '',
  },
  {
    name: 'Кратос',
    price: 420,
    weight: 310,
    description: 'норі, рис, сир вершковий, вугор, ікра, cніговий краб, чорнило',
    image: kratosURL,
    alt: 'Кратос',
    hit: '',
    new: 'New',
  },
  {
    name: 'Ямамото',
    price: 500,
    weight: 365,
    description:
      'лосось, норі, рис, сир вершковий, авокадо, ікра, креветка, cніговий краб',
    image: jamamotoURL,
    alt: 'Ямамото',
    hit: '',
    new: '',
  },
  {
    name: 'Запечена креветка',
    price: 430,
    weight: 350,
    description: 'норі, рис, сир вершковий, авокадо, ікра, креветка, сирна шапочка',
    image: friedPrawnURL,
    alt: 'Запечена креветка',
    hit: 'Hit',
    new: '',
  },
  {
    name: 'Сирний з лососем',
    price: 435,
    weight: 315,
    description: 'Норі, рис, кунжут, cоус унаги, креветка',
    image: lososCheeseURL,
    alt: 'Сирний з лососем',
    hit: 'Hit',
    new: 'New',
  },
  {
    name: 'Мікаса',
    price: 360,
    weight: 235,
    description:
      'Норі, рис, японський майонез, бальзамік, трюфельна сальса, кунжутна олія',
    image: mikasaURL,
    alt: 'Мікаса',
    hit: '',
    new: '',
  },
  {
    name: 'Комбо Філадельфія',
    price: 450,
    weight: 325,
    description: 'лосось, норі, огірок, рис, сир вершковий, кунжут, cоус унаги, вугор',
    image: filadelfiaKomboURL,
    alt: 'Комбо Філадельфія',
    hit: 'Hit',
    new: 'New',
  },
];
