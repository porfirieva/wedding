import { useContext } from "react";
import { AppContext } from "../store/AppContext";
import { PODIUM } from "../store/constants";
import Result from "../Result";
import ForwardButton from "../ForwardButton";

const Podium = () => {
  const { state, setState } = useContext(AppContext);
  const podium = state.location.steps.find((el) => el.name === PODIUM).images;

  return (
    <div className="section">
      <Result />
      <p className="text">Выберите подиум</p>
      <div className="items-small">
        <div onClick={() => setState({ ...state, podium: null })}>
          Без подиума
        </div>
        {podium.map((el) => (
          <div key={el.id} onClick={() => setState({ ...state, podium: el })}>
            <img src={el.src} alt={el.id} />
          </div>
        ))}
      </div>
      <ForwardButton />
    </div>
  );
};

export default Podium;
