import { useContext } from "react";
import { AppContext } from "../../store/AppContext.js";
import { ARCH, DECOR } from "../../constants.js";
import Result from "../Result";

const Podium = () => {
  const { state, setState } = useContext(AppContext);

  return (
    <div className="section">
      <Result />
      <h2>Выберите подиум</h2>
      <div className="items-small">
        <div onClick={() => setState({ ...state, podium: null })}>
          Без подиума
        </div>
        {DECOR.PODIUM.map((el) => (
          <div key={el.id}>
            <img
              src={el.src}
              alt={el.id}
              onClick={() => setState({ ...state, podium: el })}
            />
          </div>
        ))}
      </div>
      <button
        className="next_btn"
        onClick={() => setState({ ...state, step: ARCH })}
      >
        Следующий шаг
      </button>
    </div>
  );
};

export default Podium;
