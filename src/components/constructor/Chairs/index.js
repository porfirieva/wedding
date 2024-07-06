import { useLocation, useSearchParams } from "react-router-dom";

import { CHAIRS, LOCATION } from "../store/constants";
import Section from "../Section";
import { getStepData, updateSearchParams } from "../utils";

const Chairs = () => {
  const [, setSearchParams] = useSearchParams();

  const { search } = useLocation();

  const params = new URLSearchParams(search);
  const location = params.get(LOCATION);

  const data = getStepData(location, CHAIRS);

  const handleClick = (el) => {
    const { params } = updateSearchParams(search, CHAIRS, el.id);

    setSearchParams(params);
  };
  return (
    <Section
      title="Выберите стулья"
      onClick={(el) => handleClick(el)}
      data={data.images}
    />
  );
};

export default Chairs;
