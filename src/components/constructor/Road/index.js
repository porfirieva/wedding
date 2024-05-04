import { useContext } from "react";

import { AppContext } from "../store/AppContext";
import { DECOR } from "../store/constants";
import Section from "../Section";

const Road = () => {
  const { state, setState } = useContext(AppContext);

  return (
    <Section title="Выберите дорожку">
      <>
        <div onClick={() => setState({ ...state, road: null })}>
          Без дорожки
        </div>
        {DECOR.ROAD.map((el) => (
          <div key={el.id} onClick={() => setState({ ...state, road: el })}>
            <img src={el.src} alt={el.id} />
          </div>
        ))}
      </>
    </Section>
  );
};

export default Road;
