import s from "./style.module.scss";

const Hero = () => {
  return (
    <>
      <p className={`${s.descr} text`}>
        Здесь мы напишем какой-нибудь завлекающий классный текст с описанием
        задачи, которую решает наш сайт
      </p>
    </>
  );
};

export default Hero;
