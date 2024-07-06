import { useSearchParams } from "react-router-dom";

import Slider from "react-slick";
import { LOCATIONS } from "../store/constants";
import Hero from "../Hero";
import s from "./style.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Location = () => {
  const [, setSearchParams] = useSearchParams();

  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  const onClick = (el) => {
    const { name, step } = LOCATIONS.find((item) => item.id === el.id).steps[0];
    let params = { LOCATION: el.id, STEP: name, NUM: step };
    setSearchParams(params);
  };

  return (
    <div className={s.container}>
      <Hero />
      <h2 className={s.title}>Шаг 1. Локация</h2>
      <p className="text">Выберите место проведения мероприятия</p>

      <div className={s.slider}>
        <Slider {...settings}>
          {LOCATIONS.map((el) => {
            return (
              <div key={el.id} onClick={() => onClick(el)}>
                <div className={s.card_container}>
                  <div className={s.card}>
                    <img alt={`Площадка ${el.title}`} src={el.src} />
                    <p>{el.title}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Location;
