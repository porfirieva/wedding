import { useLocation } from "react-router-dom";

import { ARCH, LOCATION } from "../store/constants";
import Section from "../Section";
import { getStepData } from "../utils";

const Arch = () => {
  const { search } = useLocation();

  const params = new URLSearchParams(search);
  const location = params.get(LOCATION);

  const data = getStepData(location, ARCH);

  return (
    <Section
      title="Выберите арку"
      resetTitle="Без арки"
      data={data?.images}
      paramName={ARCH}
    />
  );
};

export default Arch;
