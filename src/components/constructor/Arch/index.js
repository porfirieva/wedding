import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { AppContext } from "../store/AppContext";
import { ARCH } from "../store/constants";
import Section from "../Section";
import { updateSearchParams } from "../utils";

const Arch = ({ steps }) => {
  const { state, setState } = useContext(AppContext);
  const archs = steps.find((el) => el.name === ARCH).images;

  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (el) => {
    navigate(updateSearchParams(location.search, "arch", el.id), {
      state: { step: ARCH },
    });
  };

  return (
    <Section
      title="Выберите арку"
      onClick={(el) => handleClick(el)}
      reset={() => setState({ ...state, arch: null })}
      resetTitle="Без арки"
      data={archs}
    />
  );
};

export default Arch;
