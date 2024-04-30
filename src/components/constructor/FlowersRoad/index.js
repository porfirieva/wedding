import { useContext } from "react";
import { AppContext } from "../store/AppContext";
import { DECOR } from "../store/constants";
import Result from "../Result";
import ForwardButton from "../ForwardButton";

const FlowersRoad = () => {
  const { state, setState } = useContext(AppContext);

  return (
    <div className="section">
      <Result />
      <p className="text">Выберите цветы вдоль дорожки</p>
      <div className="items-small">
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
      </div>
      <ForwardButton />
    </div>
  );
};

export default FlowersRoad;
