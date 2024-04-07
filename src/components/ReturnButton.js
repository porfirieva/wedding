import { useContext } from "react";
import { AppContext } from "../store/AppContext";
import { getStep } from "../utils";

const ReturnButton = () => {
  const { state, setState } = useContext(AppContext);

  return (
    <div>
      <button
        onClick={() =>
          setState({
            ...state,
            step: {
              name: state.location.steps[state.step.number - 1],
              number: state.step.number - 1,
            },
          })
        }
      >
        Назад
      </button>
    </div>
  );
};

export default ReturnButton;
