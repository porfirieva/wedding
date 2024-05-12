import Slider from "react-slick";

import MenuList from "../../components/MenuList";
import example from "./example.png";
import example2 from "./example2.png";
import example3 from "./example3.png";
import example4 from "./example4.png";
import example5 from "./example5.png";
import example6 from "./example6.png";

const Main = () => {
  const settings = {
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    infinite: true,
    cssEase: "ease-in-out",
  };

  return (
    <div className="section">
      <MenuList />
      <Slider {...settings}>
        <img src={example} alt="Наши работы" />
        <img src={example3} alt="Наши работы" />
        <img src={example5} alt="Наши работы" />
        <img src={example4} alt="Наши работы" />
        <img src={example2} alt="Наши работы" />
        <img src={example6} alt="Наши работы" />
      </Slider>
    </div>
  );
};

export default Main;
