import Slider from "react-slick";

import Result from "../Result";
import ForwardButton from "../ForwardButton";

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
          {resetTitle && <div onClick={reset}>{resetTitle}</div>}
          {data.map((el) => (
            <div
              key={el.id}
              onClick={() => onClick(el)}
              className="slide-wrapper"
            >
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
