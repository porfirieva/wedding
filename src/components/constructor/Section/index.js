import Slider from "react-slick";

import Result from "../Result";
import ForwardButton from "../ForwardButton";
import "./style.css";

const Section = ({ title, data, onClick, reset, resetTitle }) => {
  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          dots: true,
          slidesToShow: 2,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="section">
      <Result />
      <p className="text">{title}</p>
      <div className="items-small">
        <Slider {...settings}>
          {resetTitle && (
            <div onClick={reset} className="reset-slide">
              <p>{resetTitle}</p>
            </div>
          )}
          {data?.map((el) => (
            <div key={el.id} onClick={() => onClick(el)}>
              <img src={el.src} alt={el.id} />
            </div>
          ))}
        </Slider>
      </div>
      <ForwardButton />
    </div>
  );
};

export default Section;
