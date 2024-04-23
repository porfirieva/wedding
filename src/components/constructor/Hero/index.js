import s from "./style.module.scss";

const Hero = () => {
  return (
    <p className={`${s.descr} text`}>
      Здесь у вас есть возможность стать дизайнером и разработать свой идеальный
      декор для свадьбы
    </p>
  );
};

export default Hero;
