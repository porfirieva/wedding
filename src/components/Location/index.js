import { useContext, useEffect } from "react";
import { AppContext } from "../../store/AppContext";
import { LOCATIONS } from "../../constants";
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
  }, []);

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
                  step: {
                    name: el.steps[state.step.number + 1],
                    number: state.step.number + 1,
                  },
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
