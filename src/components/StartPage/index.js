import { useContext } from "react";
import { AppContext } from "../../store/AppContext";
import s from "./style.module.scss";
import { LOCATION } from "../../store/constants";

const StartPage = () => {
  const { setState } = useContext(AppContext);

  return (
    <div>
      <button
        className={s.button}
        onClick={() => setState({ stepName: LOCATION, step: 1 })}
      >
        Собрать площадку
      </button>
    </div>
  );
};

export default StartPage;
