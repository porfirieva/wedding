import { NavLink } from "react-router-dom";

import s from "./style.module.sass";
import mainImage from "./location_SeasonsUp.png";

const Main = () => {
  return (
    <div className="section">
      <div className={s.list}>
        <NavLink to="/about">О нас</NavLink>
        <NavLink>Портфолио</NavLink>
        <NavLink to="constructor">Конструктор декора</NavLink>
        <NavLink>Готовый декор</NavLink>
        <NavLink>Аренда реквизита</NavLink>
        <NavLink to="contacts">Контакты</NavLink>
      </div>
      <img src={mainImage} alt="ourWorks" />
    </div>
  );
};

export default Main;
