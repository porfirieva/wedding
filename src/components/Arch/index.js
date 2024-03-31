import { useContext } from "react";
import { AppContext } from "../../store/AppContext.js";
import { DECOR, FLOWERS_ARCH } from "../../constants.js";
import Result from "../Result";

const Arch = () => {
  const { state, setState } = useContext(AppContext);

  return (
    <div className="section">
      <Result />
      <h2>Выберите арку</h2>
      <div className="items-small">
        <div onClick={() => setState({ ...state, arch: null })}>Без арки</div>
        {DECOR.ARCH.map((el) => (
          <div key={el.id}>
            <img
              src={el.src}
              alt={el.id}
              onClick={() => setState({ ...state, arch: el })}
            />
          </div>
        ))}
      </div>
      <button
        className="next_btn"
        onClick={() => setState({ ...state, step: FLOWERS_ARCH })}
      >
        Следующий шаг
      </button>
    </div>
  );
};

export default Arch;
