import { useContext } from "react";

import { AppContext } from "../store/AppContext";
import { ARCH } from "../store/constants";
import Section from "../Section";

const Arch = () => {
  const { state, setState } = useContext(AppContext);
  const archs = state.location.steps.find((el) => el.name === ARCH).images;

  return (
    <Section
      title="Выберите арку"
      onClick={(el) => setState({ ...state, arch: el })}
      reset={() => setState({ ...state, arch: null })}
      resetTitle="Без арки"
      data={archs}
    />
  );
};

export default Arch;
