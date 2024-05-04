import { useContext } from "react";

import { AppContext } from "../store/AppContext";
import { DECOR } from "../store/constants";
import Section from "../Section";

const FlowersRoad = () => {
  const { state, setState } = useContext(AppContext);

  return (
    <Section title="Выберите цветы вдоль дорожки">
      <>
        <div onClick={() => setState({ ...state, flowersRoad: null })}>
          Без цветов
        </div>
        {DECOR.FLOWERS_ROAD.map((el) => (
          <div
            key={el.id}
            onClick={() => setState({ ...state, flowersRoad: el })}
          >
            <img src={el.src} alt={el.id} />
          </div>
        ))}
      </>
    </Section>
  );
};

export default FlowersRoad;
