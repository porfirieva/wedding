import { useContext } from "react";

import { AppContext } from "../store/AppContext";
import { FLOWERS_ARCH } from "../store/constants";
import Section from "../Section";

const FlowersArch = () => {
  const { state, setState } = useContext(AppContext);
  const flowers = state.location.steps.find(
    (el) => el.name === FLOWERS_ARCH
  ).images;

  return (
    <Section
      title="Выберите цветы для арки"
      onClick={(el) => setState({ ...state, flowersArch: el })}
      reset={() => setState({ ...state, flowersArch: null })}
      resetTitle={"Без цветов"}
      data={flowers}
    />
  );
};

export default FlowersArch;
