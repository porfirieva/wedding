import { useContext, useEffect } from "react";

import { AppContext } from "../store/AppContext";
import { LOCATIONS } from "../store/constants";
import Hero from "../Hero";
import s from "./style.module.scss";

const Location = () => {
  const { state, setState } = useContext(AppContext);

  useEffect(() => {
    setState({
      ...state,
      arch: null,
      chairs: null,
      flowersArch: null,
      flowersRoad: null,
      podium: null,
      road: null,
    });
  }, []); // eslint-disable-line

  return (
    <div className={s.container}>
      <Hero />
      <h2 className={s.title}>Шаг 1. Локация</h2>
      <p className="text">Выберите место проведения мероприятия</p>

      <div>
        {LOCATIONS.map((el) => {
          return (
            <div
              key={el.id}
              className={s.card}
              onClick={() =>
                setState({
                  ...state,
                  location: el,
                  step: el.steps[state.step + 1].step,
                  stepName: el.steps[state.step + 1].name,
                })
              }
            >
              <div className={s.img_container}>
                <img alt={`Площадка ${el.title}`} src={el.src} />
              </div>
              <p>{el.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Location;
