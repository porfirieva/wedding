import { useContext } from "react";
import { AppContext } from "../../store/AppContext.js";
import s from "./style.module.scss";

const Result = () => {
  const { state } = useContext(AppContext);
  const location = state.location.src;
  const podium = state.podium?.src;
  const arch = state.arch?.src;
  const flowersArch = state.flowersArch?.src;
  const road = state.road?.src;
  const flowersRoad = state.flowersRoad?.src;
  const chairs = state.chairs?.src;

  return (
    <div className={s.result_wrapper}>
      <img src={location} alt="Площадка" />
      {podium && (
        <img className={`${s.absolute} ${s.podium}`} src={podium} alt="" />
      )}
      {arch && <img className={`${s.absolute} ${s.arch}`} src={arch} alt="" />}
      {flowersArch && (
        <img className={`${s.absolute} ${s.arch}`} src={flowersArch} alt="" />
      )}
      {road && <img className={`${s.absolute} ${s.road}`} src={road} alt="" />}
      {flowersRoad && (
        <img
          className={`${s.absolute} ${s.flowersRoad}`}
          src={flowersRoad}
          alt=""
        />
      )}
      {chairs && (
        <img className={`${s.absolute} ${s.road}`} src={chairs} alt="" />
      )}
    </div>
  );
};

export default Result;
