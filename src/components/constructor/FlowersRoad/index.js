import { useContext } from "react";

import { AppContext } from "../store/AppContext";
import { DECOR } from "../store/constants";
import Section from "../Section";

const FlowersRoad = () => {
  const { state, setState } = useContext(AppContext);

  return (
    <Section
      title="Выберите цветы вдоль дорожки"
      onClick={(el) => setState({ ...state, flowersRoad: el })}
      reset={() => setState({ ...state, flowersRoad: null })}
      resetTitle="Без цветов"
      data={DECOR.FLOWERS_ROAD}
    />
  );
};

export default FlowersRoad;
