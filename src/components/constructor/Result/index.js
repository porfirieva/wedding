import s from "./style.module.scss";
import TotalPrice from "../TotalPrice";
import { useLocation } from "react-router";
import {
  ARCH,
  CHAIRS,
  FLOWERS_ARCH,
  FLOWERS_ROAD,
  LOCATION,
  LOCATIONS,
  PODIUM,
  ROAD,
} from "../store/constants";

const Result = () => {
  const { search } = useLocation();

  const params = new URLSearchParams(search);

  const location = params.get(LOCATION);
  const podium = params.get(PODIUM);
  const arch = params.get(ARCH);
  const flowersArch = params.get(FLOWERS_ARCH);
  const road = params.get(ROAD);
  const flowersRoad = params.get(FLOWERS_ROAD);
  const chairs = params.get(CHAIRS);

  const data = LOCATIONS.find((el) => el.id === location);

  const getSrc = (data, name, value) =>
    data.steps
      .find((el) => el.name === name)
      .images.find((el) => el.id === value).src;

  return (
    <>
      <TotalPrice />
      <div className={s.result_wrapper}>
        <img src={data.src} alt="Площадка" />
        {podium && (
          <img
            className={`${s.absolute} ${s.podium}`}
            src={getSrc(data, PODIUM, podium)}
            alt=""
          />
        )}
        {arch && (
          <img
            className={`${s.absolute} ${s.arch}`}
            src={getSrc(data, ARCH, arch)}
            alt=""
          />
        )}
        {flowersArch && (
          <img
            className={`${s.absolute} ${s.arch} ${s.flowersArch}`}
            src={getSrc(data, FLOWERS_ARCH, flowersArch)}
            alt=""
          />
        )}
        {road && (
          <img
            className={`${s.absolute} ${s.road}`}
            src={getSrc(data, ROAD, road)}
            alt=""
          />
        )}
        {flowersRoad && (
          <img
            className={`${s.absolute} ${s.flowersRoad}`}
            src={getSrc(data, FLOWERS_ROAD, flowersRoad)}
            alt=""
          />
        )}
        {chairs && (
          <img
            className={`${s.absolute} ${s.road} ${s.chairs}`}
            src={getSrc(data, CHAIRS, chairs)}
            alt=""
          />
        )}
      </div>
    </>
  );
};

export default Result;
