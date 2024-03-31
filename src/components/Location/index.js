import { useContext } from "react";
import { AppContext } from "../../store/AppContext";
import { LOCATIONS, PODIUM } from "../../constants";
import s from "./style.module.scss";

const Location = () => {
  const { state, setState } = useContext(AppContext);

  return (
    <div className={s.container}>
      <h2 className={s.title}>Выберите площадку</h2>

      <div className={s.wrapper}>
        {LOCATIONS.map((el) => {
          return (
            <div
              key={el.id}
              className={s.card}
              onClick={() =>
                setState({
                  ...state,
                  location: el,
                  step: PODIUM,
                })
              }
            >
              <img alt={`Площадка ${el.title}`} src={el.src} />
              <p>{el.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Location;
