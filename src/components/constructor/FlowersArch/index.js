import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { AppContext } from "../store/AppContext";
import { FLOWERS_ARCH } from "../store/constants";
import Section from "../Section";
import { updateSearchParams } from "../utils";

const FlowersArch = () => {
  const { state, setState } = useContext(AppContext);
  const flowers = state.location.steps.find(
    (el) => el.name === FLOWERS_ARCH
  ).images;

  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (el) => {
    navigate(updateSearchParams(location.search, "flowersArch", el.id), {
      state: { step: FLOWERS_ARCH },
    });
  };

  return (
    <Section
      title="Выберите цветы для арки"
      onClick={(el) => handleClick(el)}
      reset={() => setState({ ...state, flowersArch: null })}
      resetTitle={"Без цветов"}
      data={flowers}
    />
  );
};

export default FlowersArch;
