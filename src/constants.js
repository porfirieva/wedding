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
const HVOYA_SEA = "HVOYA_SEA";

export const DECOR = {
  ARCH: [{ id: ROUND, src: "./arch_round.png" }],

  FLOWERS_ARCH: [
    { id: POWDERY, src: "./flowers_arch_powdery.png" },
    { id: WHITE, src: "./flowers_arch_white.png" },
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
    steps: [
      START_PAGE,
      LOCATION,
      ARCH,
      PODIUM,
      FLOWERS_ARCH,
      ROAD,
      FLOWERS_ROAD,
      CHAIRS,
    ],
    src: "./location_SeasonsUp.png",
    title: "Времена года. Верхняя.",
  },
  {
    id: SEASONS_DOWN,
    steps: [
      START_PAGE,
      LOCATION,
      PODIUM,
      FLOWERS_ARCH,
      ROAD,
      FLOWERS_ROAD,
      CHAIRS,
    ],
    src: "./location_SeasonsDown.png",
    title: "Времена года. Нижняя.",
  },
  {
    id: HVOYA_SEA,
    steps: [
      START_PAGE,
      LOCATION,
      ARCH,
      PODIUM,
      FLOWERS_ARCH,
      ROAD,
      FLOWERS_ROAD,
      CHAIRS,
    ],
    src: "./location_HvoyaSea.png",
    title: "Хвоя",
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
