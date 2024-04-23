import { useContext } from "react";
import { AppContext } from "./store/AppContext";
import { getStep } from "./utils";

const ReturnButton = () => {
  const { state, setState } = useContext(AppContext);

  return (
    <div>
      <button
        onClick={() =>
          setState({
            ...state,
            ...getStep(state, -1),
          })
        }
      >
        Назад
      </button>
    </div>
  );
};

export default ReturnButton;
