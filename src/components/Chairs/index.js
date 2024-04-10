import { useContext } from "react";
import { AppContext } from "../../store/AppContext.js";
import { DECOR } from "../../store/constants.js";
import Result from "../Result/index.js";

const Chairs = () => {
  const { state, setState } = useContext(AppContext);

  return (
    <div className="section">
      <Result />
      <h2>Выберите стулья</h2>
      <div className="items-small">
        {DECOR.CHAIRS.map((el) => (
          <div key={el.id} onClick={() => setState({ ...state, chairs: el })}>
            <img src={el.src} alt={el.id} />
          </div>
        ))}
      </div>
      {/* <button
        className="next_btn"
        onClick={() => setState({ ...state, step: ROAD })}
      >
        Следующий шаг
      </button> */}
    </div>
  );
};

export default Chairs;
