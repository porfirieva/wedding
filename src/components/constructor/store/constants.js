//steps
export const LOCATION = "LOCATION";
export const ARCH = "ARCH";
export const PODIUM = "PODIUM";
export const FLOWERS_ARCH = "FLOWERS_ARCH";
export const ROAD = "ROAD";
export const FLOWERS_ROAD = "FLOWERS_ROAD";
export const CHAIRS = "CHAIRS";
export const EMAIL_FORM = "EMAIL_FORM";

const ROUND = "ROUND";
const POWDERY = "POWDERY";
const WHITE = "WHITE";
const TRANSPARENT = "TRANSPARENT";

const SEASONS_UP = "SESONS_UP";
const SEASONS_DOWN = "SESONS_DOWN";
const SEASONS_RESTAURANT = "SEASONS_RESTAURANT";
const HVOYA_SEA = "HVOYA_SEA";

export const DECOR = {
  ARCH: [
    { id: ROUND, src: "./arch_round.png", price: 10000, title: "Арка круглая" },
  ],

  PODIUM: [
    {
      id: ROUND,
      src: "./podium_round.png",
      title: "Подиум круглый",
      price: 10000,
    },
  ],

  FLOWERS_ARCH: [
    {
      id: POWDERY,
      src: "./flowers_arch_powdery.png",
      price: 10000,
      title: "Цветы на арку пудровые",
    },
    {
      id: WHITE,
      src: "./flowers_arch_white.png",
      price: 10000,
      title: "Цветы на арку белые",
    },
  ],

  FLOWERS_ARCH_BIG: [
    {
      id: POWDERY,
      src: "./flowers_arch_big_powdery.png",
      price: 10000,
      title: "Цветы на арку пудровые",
    },
    {
      id: WHITE,
      src: "./flowers_arch_big_white.png",
      price: 10000,
      title: "Цветы на арку белые",
    },
  ],

  ROAD: [
    {
      id: WHITE,
      src: "./road_white.png",
      price: 10000,
      title: "Дорожка белая",
    },
  ],

  FLOWERS_ROAD: [
    {
      id: WHITE,
      src: "./flowers_road_white.png",
      price: 10000,
      title: "Цветы вдоль дорожки белые",
    },
    {
      id: POWDERY,
      src: "./flowers_road_powdery.png",
      price: 10000,
      title: "Цветы вдоль дорожки пудровые",
    },
  ],

  CHAIRS: [
    {
      id: WHITE,
      src: "./chairs_white.png",
      title: "Стулья белые",
      price: 10000,
    },
    {
      id: TRANSPARENT,
      src: "./chairs_transparent.png",
      title: "Стулья прозрачные",
      price: 10000,
    },
  ],
};

export const LOCATIONS = [
  {
    id: SEASONS_UP,
    title: "Времена года. Верхняя.",
    steps: [
      { name: LOCATION, step: 0 },
      { name: ARCH, step: 1, images: DECOR.ARCH },
      { name: PODIUM, step: 2, images: DECOR.PODIUM },
      { name: FLOWERS_ARCH, step: 3, images: DECOR.FLOWERS_ARCH },
      { name: ROAD, step: 4, images: DECOR.ROAD },
      { name: FLOWERS_ROAD, step: 5, images: DECOR.FLOWERS_ROAD },
      { name: CHAIRS, step: 6, images: DECOR.CHAIRS },
      { name: EMAIL_FORM, step: 7 },
    ],
    src: "./location_SeasonsUp.png",
    price: 100000,
  },

  {
    id: SEASONS_RESTAURANT,
    title: "Времена года. Ресторан.",
    steps: [
      { name: LOCATION, step: 0 },
      { name: PODIUM, step: 1, images: DECOR.PODIUM },
      { name: FLOWERS_ARCH, step: 2, images: DECOR.FLOWERS_ARCH },
      { name: ROAD, step: 3, images: DECOR.ROAD },
      { name: FLOWERS_ROAD, step: 4, images: DECOR.FLOWERS_ROAD },
      { name: CHAIRS, step: 5, images: DECOR.CHAIRS },
      { name: EMAIL_FORM, step: 6 },
    ],
    src: "./location_SeasonsRestaurant.png",
    price: 160000,
  },

  {
    id: SEASONS_DOWN,
    title: "Времена года. Нижняя.",
    steps: [
      { name: LOCATION, step: 0 },
      { name: PODIUM, step: 1, images: DECOR.PODIUM },
      { name: FLOWERS_ARCH, step: 2, images: DECOR.FLOWERS_ARCH_BIG },
      { name: ROAD, step: 3, images: DECOR.ROAD },
      { name: FLOWERS_ROAD, step: 4, images: DECOR.FLOWERS_ROAD },
      { name: CHAIRS, step: 5, images: DECOR.CHAIRS },
      { name: EMAIL_FORM, step: 6 },
    ],
    src: "./location_SeasonsDown.png",
    price: 150000,
  },

  {
    id: HVOYA_SEA,
    title: "Хвоя",
    steps: [
      { name: LOCATION, step: 0 },
      { name: ARCH, step: 1, images: DECOR.ARCH },
      { name: PODIUM, step: 2, images: DECOR.PODIUM },
      { name: FLOWERS_ARCH, step: 3, images: DECOR.FLOWERS_ARCH },
      { name: ROAD, step: 4, images: DECOR.ROAD },
      { name: FLOWERS_ROAD, step: 5, images: DECOR.FLOWERS_ROAD },
      { name: CHAIRS, step: 6, images: DECOR.CHAIRS },
      { name: EMAIL_FORM, step: 7 },
    ],
    src: "./location_HvoyaSea.png",
    price: 100000,
  },
];

export const STEPS = [
  { id: LOCATION, name: "Площадка" },
  { id: ARCH, name: "Арка" },
  { id: PODIUM, name: "Подиум" },
  { id: FLOWERS_ARCH, name: "Цветы на арке" },
  { id: ROAD, name: "Дорожка" },
  { id: FLOWERS_ROAD, name: "Цветы вдоль дорожки" },
  { id: CHAIRS, name: "Стулья" },
];
