import { useContext } from "react";

import { AppContext } from "../store/AppContext";
import { PODIUM } from "../store/constants";
import Section from "../Section";

const Podium = () => {
  const { state, setState } = useContext(AppContext);
  const podium = state.location.steps.find((el) => el.name === PODIUM).images;

  return (
    <Section
      title="Выберите подиум"
      onClick={(el) => setState({ ...state, podium: el })}
      reset={() => setState({ ...state, podium: null })}
      resetTitle="Без подиума"
      data={podium}
    />
  );
};

export default Podium;
