import { useLocation } from "react-router";
import { getPrice } from "./utils";
import s from "./style.module.scss";

const TotalPrice = () => {
  const { search } = useLocation();
  const { totalPrice, priceInfo } = getPrice(search);

  return (
    <>
      {priceInfo.map((el) => (
        <p key={el.title} className={s.item}>
          {el.title}: {el.price}
        </p>
      ))}
      <p className={s.totalPrice}>
        <span>Итоговая стоимость: {totalPrice}р</span>
      </p>
    </>
  );
};

export default TotalPrice;
