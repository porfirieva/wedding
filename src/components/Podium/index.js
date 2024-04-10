import { useContext } from "react";
import { AppContext } from "../../store/AppContext.js";
import { PODIUM } from "../../store/constants.js";
import Result from "../Result";
import { getStep } from "../utils.js";

const Podium = () => {
  const { state, setState } = useContext(AppContext);
  const podium = state.location.steps.find((el) => el.name === PODIUM).images;

  return (
    <div className="section">
      <Result />
      <h2>Выберите подиум</h2>
      <div className="items-small">
        <div onClick={() => setState({ ...state, podium: null })}>
          Без подиума
        </div>
        {podium.map((el) => (
          <div key={el.id} onClick={() => setState({ ...state, podium: el })}>
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

export default Podium;
