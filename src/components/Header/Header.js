import logo from "./logo.png";
import s from "./style.module.sass";

const Header = () => {
  return (
    <header className={s.header}>
      <img src={logo} alt="logo" />
    </header>
  );
};

export default Header;
