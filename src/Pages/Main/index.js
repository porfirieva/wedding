import MenuList from "../../components/MenuList";
import mainImage from "./location_SeasonsUp.png";

const Main = () => {
  return (
    <div className="section">
      <MenuList />
      {/* todo slider */}
      <img src={mainImage} alt="ourWorks" />
    </div>
  );
};

export default Main;
