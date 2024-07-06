import { useLocation, useSearchParams } from "react-router-dom";

import { FLOWERS_ROAD, LOCATION } from "../store/constants";
import Section from "../Section";
import { getStepData, updateSearchParams } from "../utils";

const FlowersRoad = () => {
  const [, setSearchParams] = useSearchParams();

  const { search } = useLocation();

  const params = new URLSearchParams(search);
  const location = params.get(LOCATION);

  const data = getStepData(location, FLOWERS_ROAD);

  const handleClick = (el) => {
    const { params } = updateSearchParams(search, FLOWERS_ROAD, el.id);

    setSearchParams(params);
  };

  return (
    <Section
      title="Выберите цветы вдоль дорожки"
      onClick={(el) => handleClick(el)}
      resetTitle="Без цветов"
      data={data.images}
    />
  );
};

export default FlowersRoad;
