import { useContext } from "react";

import { AppContext } from "../store/AppContext";
import { FLOWERS_ARCH } from "../store/constants";
import Section from "../Section";

const FlowersArch = () => {
  const { state, setState } = useContext(AppContext);
  const flowers = state.location.steps.find(
    (el) => el.name === FLOWERS_ARCH
  ).images;

  return (
    <Section title="Выберите цветы для арки">
      <>
        <div onClick={() => setState({ ...state, flowersArch: null })}>
          Без цветов
        </div>
        {flowers.map((el) => (
          <div
            key={el.id}
            onClick={() => setState({ ...state, flowersArch: el })}
          >
            <img src={el.src} alt={el.id} />
          </div>
        ))}
      </>
    </Section>
  );
};

export default FlowersArch;
