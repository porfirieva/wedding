import { useLocation, useSearchParams } from "react-router-dom";

import { LOCATION, PODIUM } from "../store/constants";
import Section from "../Section";
import { getStepData, updateSearchParams } from "../utils";

const Podium = () => {
  const [, setSearchParams] = useSearchParams();

  const { search } = useLocation();

  const params = new URLSearchParams(search);
  const location = params.get(LOCATION);

  const data = getStepData(location, PODIUM);

  const handleClick = (el) => {
    const { params } = updateSearchParams(search, PODIUM, el.id);

    setSearchParams(params);
  };

  return (
    <Section
      title="Выберите подиум"
      onClick={(el) => handleClick(el)}
      resetTitle="Без подиума"
      data={data.images}
    />
  );
};

export default Podium;
