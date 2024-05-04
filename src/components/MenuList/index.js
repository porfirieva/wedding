import { NavLink } from "react-router-dom";

import s from "./style.module.sass";

const MenuList = ({ isBurgerMenu, open, setOpen }) => {
  const handleClose = isBurgerMenu ? () => setOpen(!open) : () => {};

  return (
    <div className={`${s.list} ${isBurgerMenu ? s.burger_menu : ""}`}>
      <NavLink to="about" onClick={handleClose}>
        О нас
      </NavLink>
      <NavLink to="portfolio" onClick={handleClose}>
        Портфолио
      </NavLink>
      <NavLink onClick={handleClose} to="constructor">
        Конструктор декора
      </NavLink>
      <NavLink to="decor" onClick={handleClose}>
        Готовый декор
      </NavLink>
      <NavLink to="rent" onClick={handleClose}>
        Аренда реквизита
      </NavLink>
      <NavLink onClick={handleClose} to="contacts">
        Контакты
      </NavLink>
    </div>
  );
};

export default MenuList;
