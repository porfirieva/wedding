import { useContext } from "react";
import { AppContext } from "../../store/AppContext";
import { LOCATION } from "../../constants";
import s from "./style.module.scss";

const StartPage = () => {
  const { state, setState } = useContext(AppContext);

  return (
    <div>
      <button
        className={s.button}
        onClick={() => setState({ ...state, step: LOCATION })}
      >
        Собрать площадку
      </button>
    </div>
  );
};

export default StartPage;
