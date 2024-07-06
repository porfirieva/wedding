import { useLocation } from "react-router-dom";

import { CHAIRS, LOCATION } from "../store/constants";
import Section from "../Section";
import { getStepData } from "../utils";

const Chairs = () => {
  const { search } = useLocation();

  const params = new URLSearchParams(search);
  const location = params.get(LOCATION);

  const data = getStepData(location, CHAIRS);

  return (
    <Section title="Выберите стулья" data={data.images} paramName={CHAIRS} />
  );
};

export default Chairs;
