import { useContext, useEffect } from "react";

import Slider from "react-slick";
import { AppContext } from "../store/AppContext";
import { LOCATIONS } from "../store/constants";
import Hero from "../Hero";
import s from "./style.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Location = () => {
  const { state, setState } = useContext(AppContext);

  useEffect(() => {
    setState({
      ...state,
      arch: null,
      chairs: null,
      flowersArch: null,
      flowersRoad: null,
      podium: null,
      road: null,
    });
  }, []); // eslint-disable-line

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

  return (
    <div className={s.container}>
      <Hero />
      <h2 className={s.title}>Шаг 1. Локация</h2>
      <p className="text">Выберите место проведения мероприятия</p>

      <div className={s.slider}>
        <Slider {...settings}>
          {LOCATIONS.map((el) => {
            return (
              <div
                key={el.id}
                onClick={() =>
                  setState({
                    ...state,
                    location: el,
                    step: el.steps[state.step + 1].step,
                    stepName: el.steps[state.step + 1].name,
                  })
                }
              >
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
