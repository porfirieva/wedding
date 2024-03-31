import { useContext } from "react";
import { AppContext } from "../../store/AppContext.js";
import { CHAIRS, DECOR } from "../../constants.js";
import Result from "../Result";

const FlowersRoad = () => {
  const { state, setState } = useContext(AppContext);

  return (
    <div className="section">
      <Result />
      <h2>Выберите цветы вдоль дорожки</h2>
      <div className="items-small">
        <div onClick={() => setState({ ...state, flowersRoad: null })}>
          Без цветов
        </div>
        {DECOR.FLOWERS_ROAD.map((el) => (
          <div key={el.id}>
            <img
              src={el.src}
              alt={el.id}
              onClick={() => setState({ ...state, flowersRoad: el })}
            />
          </div>
        ))}
      </div>
      <button
        className="next_btn"
        onClick={() => setState({ ...state, step: CHAIRS })}
      >
        Следующий шаг
      </button>
    </div>
  );
};

export default FlowersRoad;
