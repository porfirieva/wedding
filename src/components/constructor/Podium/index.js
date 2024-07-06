import { useLocation } from "react-router-dom";

import { LOCATION, PODIUM } from "../store/constants";
import Section from "../Section";
import { getStepData } from "../utils";

const Podium = () => {
  const { search } = useLocation();

  const params = new URLSearchParams(search);
  const location = params.get(LOCATION);

  const data = getStepData(location, PODIUM);

  return (
    <Section
      title="Выберите подиум"
      resetTitle="Без подиума"
      data={data.images}
      paramName={PODIUM}
    />
  );
};

export default Podium;
