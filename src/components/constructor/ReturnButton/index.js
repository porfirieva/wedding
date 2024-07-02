import { useNavigate } from "react-router-dom";

import { ArrowIcon as BackIcon } from "../../icons/ArrowIcon";
import s from "./style.module.scss";

const ReturnButton = () => {
  const navigate = useNavigate();

  return (
    <div className={s.back} title="Назад" onClick={() => navigate(-1)}>
      <BackIcon />

      <button>Назад</button>
    </div>
  );
};

export default ReturnButton;
