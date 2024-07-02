import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { AppContext } from "../store/AppContext";
import { PODIUM } from "../store/constants";
import Section from "../Section";
import { updateSearchParams } from "../utils";

const Podium = () => {
  const { state, setState } = useContext(AppContext);
  const podium = state.location.steps.find((el) => el.name === PODIUM).images;

  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (el) => {
    navigate(updateSearchParams(location.search, "podium", el.id), {
      state: { step: PODIUM },
    });
  };

  return (
    <Section
      title="Выберите подиум"
      onClick={(el) => handleClick(el)}
      reset={() => setState({ ...state, podium: null })}
      resetTitle="Без подиума"
      data={podium}
    />
  );
};

export default Podium;
