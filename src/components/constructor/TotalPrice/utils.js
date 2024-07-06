import { DECOR } from "../store/constants";

export const getPrice = (search) => {
  let totalPrice = 0;
  const priceInfo = [];

  const params = new URLSearchParams(search);
  params.forEach((value, key) => {
    const element = DECOR[key]?.find((el) => el.id === value);
    if (element) {
      priceInfo.push(element);
      totalPrice += element.price;
    }
  });

  return {
    totalPrice,
    priceInfo,
  };
};
