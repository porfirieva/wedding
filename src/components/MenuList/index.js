import { NavLink } from "react-router-dom";
import s from "./style.module.sass";

const MenuList = ({ isBurgerMenu, open, setOpen }) => {
  if (isBurgerMenu) {
    const handleClose = () => setOpen(!open);

    return (
      <div className={`${s.list} ${s.burger_menu}`}>
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
  }

  return (
    <div className={s.list}>
      <NavLink to="about">О нас</NavLink>
      <NavLink to="portfolio">Портфолио</NavLink>
      <NavLink to="constructor">Конструктор декора</NavLink>
      <NavLink to="decor">Готовый декор</NavLink>
      <NavLink to="rent">Аренда реквизита</NavLink>
      <NavLink to="contacts">Контакты</NavLink>
    </div>
  );
};

export default MenuList;
