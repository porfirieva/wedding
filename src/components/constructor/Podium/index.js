import { useContext } from "react";

import { AppContext } from "../store/AppContext";
import { PODIUM } from "../store/constants";
import Section from "../Section";

const Podium = () => {
  const { state, setState } = useContext(AppContext);
  const podium = state.location.steps.find((el) => el.name === PODIUM).images;

  return (
    <Section title="Выберите подиум">
      <>
        <div onClick={() => setState({ ...state, podium: null })}>
          Без подиума
        </div>
        {podium.map((el) => (
          <div key={el.id} onClick={() => setState({ ...state, podium: el })}>
            <img src={el.src} alt={el.id} />
          </div>
        ))}
      </>
    </Section>
  );
};

export default Podium;
