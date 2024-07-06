import { useLocation } from "react-router-dom";

import { FLOWERS_ROAD, LOCATION } from "../store/constants";
import Section from "../Section";
import { getStepData } from "../utils";

const FlowersRoad = () => {
  const { search } = useLocation();

  const params = new URLSearchParams(search);
  const location = params.get(LOCATION);

  const data = getStepData(location, FLOWERS_ROAD);

  return (
    <Section
      title="Выберите цветы вдоль дорожки"
      resetTitle="Без цветов"
      data={data.images}
      paramName={FLOWERS_ROAD}
    />
  );
};

export default FlowersRoad;
