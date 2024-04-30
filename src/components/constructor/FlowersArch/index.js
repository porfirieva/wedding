import { useContext } from "react";
import { AppContext } from "../store/AppContext";
import { FLOWERS_ARCH } from "../store/constants";
import Result from "../Result";
import ForwardButton from "../ForwardButton";

const FlowersArch = () => {
  const { state, setState } = useContext(AppContext);
  const flowers = state.location.steps.find(
    (el) => el.name === FLOWERS_ARCH
  ).images;

  return (
    <div className="section">
      <Result />
      <p className="text">Выберите цветы для арки</p>
      <div className="items-small">
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
      </div>
      <ForwardButton />
    </div>
  );
};

export default FlowersArch;
