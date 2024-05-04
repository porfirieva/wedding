import { useState } from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";

import logo from "./logo.png";
import MenuList from "../MenuList";
import s from "./style.module.sass";

const Header = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className={s.header}>
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      {location.pathname !== "/" && (
        <div>
          <input
            type="checkbox"
            id="burger-checkbox"
            className={s.burger_checkbox}
            onChange={() => setOpen(!open)}
            checked={open}
          />
          <label className={s.burger} htmlFor="burger-checkbox"></label>
        </div>
      )}
      {open && <MenuList isBurgerMenu open={open} setOpen={setOpen} />}
    </header>
  );
};

export default Header;
