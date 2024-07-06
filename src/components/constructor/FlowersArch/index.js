import { useLocation } from "react-router-dom";

import { FLOWERS_ARCH, LOCATION } from "../store/constants";
import Section from "../Section";
import { getStepData } from "../utils";

const FlowersArch = () => {
  const { search } = useLocation();

  const params = new URLSearchParams(search);
  const location = params.get(LOCATION);

  const data = getStepData(location, FLOWERS_ARCH);

  return (
    <Section
      title="Выберите цветы для арки"
      resetTitle={"Без цветов"}
      paramName={FLOWERS_ARCH}
      data={data.images}
    />
  );
};

export default FlowersArch;
