import { useContext } from "react";
import { AppContext } from "../../store/AppContext.js";
import { DECOR } from "../../constants.js";
import Result from "../Result";
import { getStep } from "../../utils.js";

const Road = () => {
  const { state, setState } = useContext(AppContext);

  return (
    <div className="section">
      <Result />
      <h2>Выберите дорожку</h2>
      <div className="items-small">
        <div onClick={() => setState({ ...state, road: null })}>
          Без дорожки
        </div>
        {DECOR.ROAD.map((el) => (
          <div key={el.id} onClick={() => setState({ ...state, road: el })}>
            <img src={el.src} alt={el.id} />
          </div>
        ))}
      </div>
      <button
        className="next_btn"
        onClick={() => setState({ ...state, step: getStep(state) })}
      >
        Следующий шаг
      </button>
    </div>
  );
};

export default Road;
