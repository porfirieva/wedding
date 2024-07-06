import { useLocation, useSearchParams } from "react-router-dom";

import { LOCATION, ROAD } from "../store/constants";
import Section from "../Section";
import { getStepData, updateSearchParams } from "../utils";

const Road = () => {
  const [, setSearchParams] = useSearchParams();

  const { search } = useLocation();

  const params = new URLSearchParams(search);
  const location = params.get(LOCATION);

  const data = getStepData(location, ROAD);

  const handleClick = (el) => {
    const { params } = updateSearchParams(search, ROAD, el.id);

    setSearchParams(params);
  };

  return (
    <Section
      title="Выберите дорожку"
      onClick={(el) => handleClick(el)}
      resetTitle="Без дорожки"
      data={data.images}
    />
  );
};

export default Road;
