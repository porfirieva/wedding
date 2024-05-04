import Result from "../Result";
import ForwardButton from "../ForwardButton";

const Section = ({ title, children }) => {
  return (
    <div className="section">
      <Result />
      <p className="text">{title}</p>
      <div className="items-small">{children}</div>
      <ForwardButton />
    </div>
  );
};

export default Section;
