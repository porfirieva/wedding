import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { AppContext } from "../store/AppContext";
import { DECOR, ROAD } from "../store/constants";
import Section from "../Section";
import { updateSearchParams } from "../utils";

const Road = () => {
  const { state, setState } = useContext(AppContext);

  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (el) => {
    navigate(updateSearchParams(location.search, "road", el.id), {
      state: { step: ROAD },
    });
  };

  return (
    <Section
      title="Выберите дорожку"
      onClick={(el) => handleClick(el)}
      reset={() => setState({ ...state, road: null })}
      resetTitle="Без дорожки"
      data={DECOR.ROAD}
    />
  );
};

export default Road;
