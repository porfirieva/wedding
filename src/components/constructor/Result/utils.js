const KEYS_WITH_PRICE = [
  "arch",
  "flowersArch",
  "podium",
  "road",
  "flowersRoad",
  "chairs",
];

export const getPrice = (state) => {
  let totalPrice = 0;
  const priceInfo = [];

  KEYS_WITH_PRICE.forEach((key) => {
    if (state[key]) {
      totalPrice += state[key].price;
      priceInfo.push(state[key]);
    }
  });

  return { totalPrice, priceInfo };
};
