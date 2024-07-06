import { useLocation } from "react-router";
import { ArrowIcon as NextIcon } from "../../icons/ArrowIcon";
import s from "./style.module.scss";
import { LOCATION, NUM, STEP } from "../store/constants";
import { getStep } from "../utils";
import { useSearchParams } from "react-router-dom";

const ForwardButton = () => {
  const { search } = useLocation();
  const [, setSearchParams] = useSearchParams();

  const handleClick = () => {
    const params = new URLSearchParams(search);

    const location = params.get(LOCATION);
    let stepNum = Number(params.get(NUM));

    const nextStep = getStep(location).steps[stepNum].name;

    params.set(STEP, nextStep);
    params.set(NUM, (stepNum += 1));

    params.toString();
    setSearchParams(params);
  };

  return (
    <div>
      <div className={s.forward} title="Следующий шаг" onClick={handleClick}>
        <button>Следующий шаг</button>
        <NextIcon rotate />
      </div>
    </div>
  );
};

export default ForwardButton;
