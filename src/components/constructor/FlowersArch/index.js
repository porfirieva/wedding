import { useLocation, useSearchParams } from "react-router-dom";

import { FLOWERS_ARCH, LOCATION } from "../store/constants";
import Section from "../Section";
import { getStepData, updateSearchParams } from "../utils";

const FlowersArch = () => {
  const [, setSearchParams] = useSearchParams();

  const { search } = useLocation();

  const params = new URLSearchParams(search);
  const location = params.get(LOCATION);

  const data = getStepData(location, FLOWERS_ARCH);

  const handleClick = (el) => {
    const { params } = updateSearchParams(search, FLOWERS_ARCH, el.id);

    setSearchParams(params);
  };

  return (
    <Section
      title="Выберите цветы для арки"
      onClick={(el) => handleClick(el)}
      resetTitle={"Без цветов"}
      data={data.images}
    />
  );
};

export default FlowersArch;
