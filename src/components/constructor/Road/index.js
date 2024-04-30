import { useContext } from "react";
import { AppContext } from "../store/AppContext";
import { DECOR } from "../store/constants";
import Result from "../Result";
import ForwardButton from "../ForwardButton";

const Road = () => {
  const { state, setState } = useContext(AppContext);

  return (
    <div className="section">
      <Result />
      <p className="text">Выберите дорожку</p>
      <div className="items-small">
        <div onClick={() => setState({ ...state, road: null })}>
          Без дорожки
        </div>
        {DECOR.ROAD.map((el) => (
          <div key={el.id} onClick={() => setState({ ...state, road: el })}>
            <img src={el.src} alt={el.id} />
          </div>
        ))}
      </div>
      <ForwardButton />
    </div>
  );
};

export default Road;
