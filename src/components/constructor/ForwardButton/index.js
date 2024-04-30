import { useContext } from "react";
import { AppContext } from "../store/AppContext";
import { getStep } from "../utils";
import { ArrowIcon as NextIcon } from "../../icons/ArrowIcon";
import s from "./style.module.scss";

const ForwardButton = () => {
  const { state, setState } = useContext(AppContext);

  return (
    <div>
      <div
        className={s.forward}
        title="Следующий шаг"
        onClick={() => setState({ ...state, ...getStep(state) })}
      >
        <button>Следующий шаг</button>
        <NextIcon rotate />
      </div>
    </div>
  );
};

export default ForwardButton;
