import { useContext } from "react";

import { AppContext } from "../store/AppContext";
import { DECOR } from "../store/constants";
import Section from "../Section";

const Road = () => {
  const { state, setState } = useContext(AppContext);

  return (
    <Section
      title="Выберите дорожку"
      onClick={(el) => setState({ ...state, road: el })}
      reset={() => setState({ ...state, road: null })}
      resetTitle="Без дорожки"
      data={DECOR.ROAD}
    />
  );
};

export default Road;
