import { useContext } from "react";

import { AppContext } from "../store/AppContext";
import { DECOR } from "../store/constants";
import Section from "../Section";

const Chairs = () => {
  const { state, setState } = useContext(AppContext);

  return (
    <Section
      title="Выберите стулья"
      onClick={(el) => setState({ ...state, chairs: el })}
      data={DECOR.CHAIRS}
    />
  );
};

export default Chairs;
