//steps
export const START_PAGE = "START_PAGE";
export const LOCATION = "LOCATION";
export const ARCH = "ARCH";
export const PODIUM = "PODIUM";
export const FLOWERS_ARCH = "FLOWERS_ARCH";
export const ROAD = "ROAD";
export const FLOWERS_ROAD = "FLOWERS_ROAD";
export const CHAIRS = "CHAIRS";

const ROUND = "ROUND";
const POWDERY = "POWDERY";
const WHITE = "WHITE";
const TRANSPARENT = "TRANSPARENT";

const SEASONS_UP = "SESONS_UP";
const SEASONS_DOWN = "SESONS_DOWN";
const SEASONS_RESTAURANT = "SEASONS_RESTAURANT";
const HVOYA_SEA = "HVOYA_SEA";

export const DECOR = {
  ARCH: [{ id: ROUND, src: "./arch_round.png" }],

  FLOWERS_ARCH: [
    { id: POWDERY, src: "./flowers_arch_powdery.png" },
    { id: WHITE, src: "./flowers_arch_white.png" },
  ],

  FLOWERS_ARCH_BIG: [
    { id: POWDERY, src: "./flowers_arch_big_powdery.png" },
    { id: WHITE, src: "./flowers_arch_big_white.png" },
  ],

  ROAD: [{ id: WHITE, src: "./road_white.png" }],

  FLOWERS_ROAD: [
    { id: WHITE, src: "./flowers_road_white.png" },
    { id: POWDERY, src: "./flowers_road_powdery.png" },
  ],

  CHAIRS: [
    { id: WHITE, src: "./chairs_white.png", title: "Белые" },
    { id: TRANSPARENT, src: "./chairs_transparent.png", title: "Прозрачные" },
  ],

  PODIUM: [{ id: ROUND, src: "./podium_round.png", title: "Круглый" }],
};

export const LOCATIONS = [
  {
    id: SEASONS_UP,
    title: "Времена года. Верхняя.",
    steps: [
      { name: START_PAGE, step: 0 },
      { name: LOCATION, step: 1 },
      { name: ARCH, step: 2, images: DECOR.ARCH },
      { name: PODIUM, step: 3, images: DECOR.PODIUM },
      { name: FLOWERS_ARCH, step: 4, images: DECOR.FLOWERS_ARCH },
      { name: ROAD, step: 5, images: DECOR.ROAD },
      { name: FLOWERS_ROAD, step: 6, images: DECOR.FLOWERS_ROAD },
      { name: CHAIRS, step: 7, images: DECOR.CHAIRS },
    ],
    src: "./location_SeasonsUp.png",
  },

  {
    id: SEASONS_RESTAURANT,
    title: "Времена года. Ресторан.",
    steps: [
      { name: START_PAGE, step: 0 },
      { name: LOCATION, step: 1 },
      { name: PODIUM, step: 2, images: DECOR.PODIUM },
      { name: FLOWERS_ARCH, step: 3, images: DECOR.FLOWERS_ARCH },
      { name: ROAD, step: 4, images: DECOR.ROAD },
      { name: FLOWERS_ROAD, step: 5, images: DECOR.FLOWERS_ROAD },
      { name: CHAIRS, step: 6, images: DECOR.CHAIRS },
    ],
    src: "./location_SeasonsRestaurant.png",
  },

  {
    id: SEASONS_DOWN,
    title: "Времена года. Нижняя.",
    steps: [
      { name: START_PAGE, step: 0 },
      { name: LOCATION, step: 1 },
      { name: PODIUM, step: 2, images: DECOR.PODIUM },
      { name: FLOWERS_ARCH, step: 3, images: DECOR.FLOWERS_ARCH_BIG },
      { name: ROAD, step: 4, images: DECOR.ROAD },
      { name: FLOWERS_ROAD, step: 5, images: DECOR.FLOWERS_ROAD },
      { name: CHAIRS, step: 6, images: DECOR.CHAIRS },
    ],
    src: "./location_SeasonsDown.png",
  },

  {
    id: HVOYA_SEA,
    title: "Хвоя",
    steps: [
      { name: START_PAGE, step: 0 },
      { name: LOCATION, step: 1 },
      { name: ARCH, step: 2, images: DECOR.ARCH },
      { name: PODIUM, step: 3, images: DECOR.PODIUM },
      { name: FLOWERS_ARCH, step: 4, images: DECOR.FLOWERS_ARCH },
      { name: ROAD, step: 5, images: DECOR.ROAD },
      { name: FLOWERS_ROAD, step: 6, images: DECOR.FLOWERS_ROAD },
      { name: CHAIRS, step: 7, images: DECOR.CHAIRS },
    ],
    src: "./location_HvoyaSea.png",
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
