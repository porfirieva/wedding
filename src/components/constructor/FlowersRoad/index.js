import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { AppContext } from "../store/AppContext";
import { DECOR, FLOWERS_ROAD } from "../store/constants";
import Section from "../Section";
import { updateSearchParams } from "../utils";

const FlowersRoad = () => {
  const { state, setState } = useContext(AppContext);

  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (el) => {
    navigate(updateSearchParams(location.search, "flowersRoad", el.id), {
      state: { step: FLOWERS_ROAD },
    });
  };

  return (
    <Section
      title="Выберите цветы вдоль дорожки"
      onClick={(el) => handleClick(el)}
      reset={() => setState({ ...state, flowersRoad: null })}
      resetTitle="Без цветов"
      data={DECOR.FLOWERS_ROAD}
    />
  );
};

export default FlowersRoad;
