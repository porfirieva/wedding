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
          {resetTitle && (
            <div>
              <div onClick={reset} className="slide-wrapper">
                <div className="slide-content">
                  <div>{resetTitle}</div>
                </div>
              </div>
            </div>
          )}
          {data.map((el) => (
            <div key={el.id}>
              <div onClick={() => onClick(el)} className="slide-wrapper">
                <div className="slide-content">
                  <div>
                    <img src={el.src} alt={el.id} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <ForwardButton />
    </div>
  );
};

export default Section;
