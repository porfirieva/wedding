import { useContext } from "react";

import { AppContext } from "../store/AppContext";
import { ARCH } from "../store/constants";
import Section from "../Section";

const Arch = () => {
  const { state, setState } = useContext(AppContext);
  const archs = state.location.steps.find((el) => el.name === ARCH).images;

  return (
    <Section title="Выберите арку">
      <>
        <div onClick={() => setState({ ...state, arch: null })}>Без арки</div>
        {archs.map((el) => (
          <div key={el.id} onClick={() => setState({ ...state, arch: el })}>
            <img src={el.src} alt={el.id} />
          </div>
        ))}
      </>
    </Section>
  );
};

export default Arch;
