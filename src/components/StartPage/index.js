import { useContext } from "react";
import { AppContext } from "../../store/AppContext";
import s from "./style.module.scss";
import { LOCATION } from "../../constants";

const StartPage = () => {
  const { state, setState } = useContext(AppContext);

  return (
    <div>
      <button
        className={s.button}
        onClick={() =>
          setState({ ...state, step: { name: LOCATION, number: 1 } })
        }
      >
        Собрать площадку
      </button>
    </div>
  );
};

export default StartPage;
