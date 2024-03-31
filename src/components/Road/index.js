import { useContext } from "react";
import { AppContext } from "../../store/AppContext.js";
import { DECOR, FLOWERS_ROAD } from "../../constants.js";
import Result from "../Result";

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
          <div key={el.id}>
            <img
              src={el.src}
              alt={el.id}
              onClick={() => setState({ ...state, road: el })}
            />
          </div>
        ))}
      </div>
      <button
        className="next_btn"
        onClick={() => setState({ ...state, step: FLOWERS_ROAD })}
      >
        Следующий шаг
      </button>
    </div>
  );
};

export default Road;
