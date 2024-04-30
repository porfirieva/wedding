import { useContext } from "react";
import { AppContext } from "../store/AppContext";
import { DECOR } from "../store/constants";
import Result from "../Result";
import ForwardButton from "../ForwardButton";

const Chairs = () => {
  const { state, setState } = useContext(AppContext);

  return (
    <div className="section">
      <Result />
      <p className="text">Выберите стулья</p>
      <div className="items-small">
        {DECOR.CHAIRS.map((el) => (
          <div key={el.id} onClick={() => setState({ ...state, chairs: el })}>
            <img src={el.src} alt={el.id} />
          </div>
        ))}
      </div>
      <ForwardButton />
    </div>
  );
};

export default Chairs;
