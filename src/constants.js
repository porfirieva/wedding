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
    src: "./location_SeasonsUp.png",
    title: "Времена года. Верхняя.",
    // steps: {
    //   START_PAGE: { step: 1 },
    //   LOCATION: { step: 2 },
    //   ARCH: { step: 3, images: DECOR.ARCH },
    //   PODIUM: { step: 4, images: DECOR.PODIUM },
    //   FLOWERS_ARCH: {
    //     step: 5,
    //     images: [
    //       { id: POWDERY, src: "./flowers_arch_powdery.png" },
    //       { id: WHITE, src: "./flowers_arch_white.png" },
    //     ],
    //   },
    // },
    steps: [
      { name: START_PAGE, number: 0 },
      { name: LOCATION, number: 1 },
      { name: ARCH, number: 2, images: DECOR.ARCH },
      { name: PODIUM, number: 3, images: DECOR.PODIUM },
      {
        name: FLOWERS_ARCH,
        number: 4,
        images: [
          { id: POWDERY, src: "./flowers_arch_powdery.png" },
          { id: WHITE, src: "./flowers_arch_white.png" },
        ],
      },
      { name: FLOWERS_ROAD, step: 5, images: DECOR.FLOWERS_ROAD },
      { name: ROAD, step: 6, images: DECOR.ROAD },
      { name: CHAIRS, step: 7, images: DECOR.CHAIRS },
    ],
  },
  {
    id: SEASONS_DOWN,
    steps: [
      { name: START_PAGE, number: 0 },
      { name: LOCATION, number: 1 },
      { name: PODIUM, number: 2, images: DECOR.PODIUM },
      {
        name: FLOWERS_ARCH,
        number: 3,
        images: [
          { id: POWDERY, src: "./flowers_arch_big_powdery.png" },
          { id: WHITE, src: "./flowers_arch_big_white.png" },
        ],
      },
      { name: ROAD, step: 4, images: DECOR.ROAD },
      { name: FLOWERS_ROAD, step: 5, images: DECOR.FLOWERS_ROAD },
      { name: CHAIRS, step: 6, images: DECOR.CHAIRS },
    ],
    src: "./location_SeasonsDown.png",
    title: "Времена года. Нижняя.",
  },
  {
    id: HVOYA_SEA,
    steps: [
      { name: START_PAGE, number: 0 },
      { name: LOCATION, number: 1 },
      { name: ARCH, number: 2, images: DECOR.ARCH },
      { name: PODIUM, number: 3, images: DECOR.PODIUM },
      {
        name: FLOWERS_ARCH,
        number: 4,
        images: [
          { id: POWDERY, src: "./flowers_arch_powdery.png" },
          { id: WHITE, src: "./flowers_arch_white.png" },
        ],
      },
      { name: FLOWERS_ROAD, step: 5, images: DECOR.FLOWERS_ROAD },
      { name: ROAD, step: 6, images: DECOR.ROAD },
      { name: CHAIRS, step: 7, images: DECOR.CHAIRS },
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
