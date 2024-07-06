import { useLocation, useSearchParams } from "react-router-dom";

import { ARCH, LOCATION } from "../store/constants";
import Section from "../Section";
import { getStepData, updateSearchParams } from "../utils";

const Arch = () => {
  const [, setSearchParams] = useSearchParams();

  const { search } = useLocation();

  const params = new URLSearchParams(search);
  const location = params.get(LOCATION);

  const data = getStepData(location, ARCH);

  const handleClick = (el) => {
    const { params } = updateSearchParams(search, ARCH, el.id);

    setSearchParams(params);
  };

  return (
    <Section
      title="Выберите арку"
      onClick={(el) => handleClick(el)}
      resetTitle="Без арки"
      data={data?.images}
    />
  );
};

export default Arch;
