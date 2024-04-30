import { useContext } from "react";
import { AppContext } from "../store/AppContext";
import s from "./style.module.scss";
import { getPrice } from "./utils";

const Result = () => {
  const { state } = useContext(AppContext);
  const location = state.location;
  const podium = state.podium;
  const arch = state.arch;
  const flowersArch = state.flowersArch;
  const road = state.road;
  const flowersRoad = state.flowersRoad;
  const chairs = state.chairs;

  const { totalPrice, priceInfo } = getPrice(state);

  return (
    <>
      {priceInfo.map((el) => (
        <p key={el.title}>
          {el.title}: {el.price}
        </p>
      ))}
      <p className={s.totalPrice}>
        <span>Итоговая стоимость: {totalPrice}р</span>
      </p>
      <div className={s.result_wrapper}>
        <img src={location?.src} alt="Площадка" />
        {podium && (
          <img
            className={`${s.absolute} ${s.podium}`}
            src={podium?.src}
            alt=""
          />
        )}
        {arch && (
          <img className={`${s.absolute} ${s.arch}`} src={arch?.src} alt="" />
        )}
        {flowersArch && (
          <img
            className={`${s.absolute} ${s.arch} ${s.flowersArch}`}
            src={flowersArch?.src}
            alt=""
          />
        )}
        {road && (
          <img className={`${s.absolute} ${s.road}`} src={road?.src} alt="" />
        )}
        {flowersRoad && (
          <img
            className={`${s.absolute} ${s.flowersRoad}`}
            src={flowersRoad?.src}
            alt=""
          />
        )}
        {chairs && (
          <img
            className={`${s.absolute} ${s.road} ${s.chairs}`}
            src={chairs?.src}
            alt=""
          />
        )}
      </div>
    </>
  );
};

export default Result;
