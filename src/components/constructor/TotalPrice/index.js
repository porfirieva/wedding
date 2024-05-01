import { useContext } from "react";
import { AppContext } from "../store/AppContext";
import { getPrice } from "./utils";
import s from "./style.module.scss";

const TotalPrice = () => {
  const { state } = useContext(AppContext);
  const { totalPrice, priceInfo } = getPrice(state);

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
