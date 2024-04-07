import logo from "./logo.png";
import s from "./style.module.sass";

const Header = () => {
  return (
    <div className="container">
      <header className={s.header}>
        <img src={logo} alt="logo" />
      </header>
    </div>
  );
};

export default Header;
