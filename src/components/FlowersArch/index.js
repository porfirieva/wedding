import { useContext } from "react";
import { AppContext } from "../../store/AppContext.js";
import { DECOR } from "../../constants.js";
import Result from "../Result";
import { getStep } from "../../utils.js";

const FlowersArch = () => {
  const { state, setState } = useContext(AppContext);
  console.log(state);

  return (
    <div className="section">
      <Result />
      <h2>Выберите цветы для арки</h2>
      <div className="items-small">
        <div onClick={() => setState({ ...state, flowersArch: null })}>
          Без цветов
        </div>
        {DECOR.FLOWERS_ARCH.map((el) => (
          <div
            key={el.id}
            onClick={() => setState({ ...state, flowersArch: el })}
          >
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

export default FlowersArch;
