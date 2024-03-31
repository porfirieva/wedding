import { useContext } from "react";
import { AppContext } from "../../store/AppContext.js";
import { DECOR, ROAD } from "../../constants.js";
import Result from "../Result";

const FlowersArch = () => {
  const { state, setState } = useContext(AppContext);

  return (
    <div className="section">
      <Result />
      <h2>Выберите цветы для арки</h2>
      <div className="items-small">
        <div onClick={() => setState({ ...state, flowersArch: null })}>
          Без цветов
        </div>
        {DECOR.FLOWERS_ARCH.map((el) => (
          <div key={el.id}>
            <img
              src={el.src}
              alt={el.id}
              onClick={() => setState({ ...state, flowersArch: el })}
            />
          </div>
        ))}
      </div>
      <button
        className="next_btn"
        onClick={() => setState({ ...state, step: ROAD })}
      >
        Следующий шаг
      </button>
    </div>
  );
};

export default FlowersArch;
