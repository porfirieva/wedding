import { useContext } from "react";

import { AppContext } from "../store/AppContext";
import { DECOR } from "../store/constants";
import Section from "../Section";

const Chairs = () => {
  const { state, setState } = useContext(AppContext);

  return (
    <Section title="Выберите стулья">
      {DECOR.CHAIRS.map((el) => (
        <div key={el.id} onClick={() => setState({ ...state, chairs: el })}>
          <img src={el.src} alt={el.id} />
        </div>
      ))}
    </Section>
  );
};

export default Chairs;
