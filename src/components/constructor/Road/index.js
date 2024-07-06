import { useLocation } from "react-router-dom";

import { LOCATION, ROAD } from "../store/constants";
import Section from "../Section";
import { getStepData } from "../utils";

const Road = () => {
  const { search } = useLocation();

  const params = new URLSearchParams(search);
  const location = params.get(LOCATION);

  const data = getStepData(location, ROAD);

  return (
    <Section
      title="Выберите дорожку"
      resetTitle="Без дорожки"
      data={data.images}
      paramName={ROAD}
    />
  );
};

export default Road;
