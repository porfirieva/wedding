import { useContext } from "react";
import { AppContext } from "../store/AppContext";
import { DECOR } from "../store/constants";
import Result from "../Result";
import { getStep } from "../utils";

const FlowersRoad = () => {
  const { state, setState } = useContext(AppContext);

  return (
    <div className="section">
      <Result />
      <p className="text">Выберите цветы вдоль дорожки</p>
      <div className="items-small">
        <div onClick={() => setState({ ...state, flowersRoad: null })}>
          Без цветов
        </div>
        {DECOR.FLOWERS_ROAD.map((el) => (
          <div
            key={el.id}
            onClick={() => setState({ ...state, flowersRoad: el })}
          >
            <img src={el.src} alt={el.id} />
          </div>
        ))}
      </div>
      <button
        className="next_btn"
        onClick={() => setState({ ...state, ...getStep(state) })}
      >
        Следующий шаг
      </button>
    </div>
  );
};

export default FlowersRoad;
