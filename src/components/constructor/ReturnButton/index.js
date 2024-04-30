import { useContext } from "react";
import { AppContext } from "../store/AppContext";
import { getStep } from "../utils";
import { ArrowIcon as BackIcon } from "../../icons/ArrowIcon";
import s from "./style.module.scss";

const ReturnButton = () => {
  const { state, setState } = useContext(AppContext);

  return (
    <div
      className={s.back}
      title="Назад"
      onClick={() =>
        setState({
          ...state,
          ...getStep(state, -1),
        })
      }
    >
      <BackIcon />

      <button>Назад</button>
    </div>
  );
};

export default ReturnButton;
