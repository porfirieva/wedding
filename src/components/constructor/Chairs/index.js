import { useNavigate, useLocation } from "react-router-dom";

import { CHAIRS, DECOR } from "../store/constants";
import Section from "../Section";
import { updateSearchParams } from "../utils";

const Chairs = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (el) => {
    navigate(updateSearchParams(location.search, "chairs", el.id), {
      state: { step: CHAIRS },
    });
  };

  return (
    <Section
      title="Выберите стулья"
      onClick={(el) => handleClick(el)}
      data={DECOR.CHAIRS}
    />
  );
};

export default Chairs;
