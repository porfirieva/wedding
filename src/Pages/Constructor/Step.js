import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  ReturnButton,
  FlowersArch,
  Arch,
  Road,
  FlowersRoad,
  Chairs,
  Podium,
  Location,
  EmailForm,
} from "../../components/constructor";
import {
  ARCH,
  CHAIRS,
  FLOWERS_ARCH,
  FLOWERS_ROAD,
  PODIUM,
  ROAD,
  EMAIL_FORM,
  LOCATIONS,
} from "../../components/constructor/store/constants";
import "../../styles/slider.css";

const Step = () => {
  const { search } = useLocation();

  const params = new URLSearchParams(search);
  const arch = params.get("arch");
  const flowersArch = params.get("flowersArch");
  const podium = params.get("podium");

  const steps = LOCATIONS.find((el) => el.id === params.get("location"))?.steps;
  const step = steps ? steps[1].name : undefined;

  return (
    <>
      {!!search && <ReturnButton />}
      {!params.size && <Location />}
      {step === PODIUM && <Podium />}
      {step === ARCH && <Arch steps={steps} />}
      {step === FLOWERS_ARCH && <FlowersArch />}
      {step === ROAD && <Road />}
      {step === FLOWERS_ROAD && <FlowersRoad />}
      {step === CHAIRS && <Chairs />}
      {step === EMAIL_FORM && <EmailForm />}
    </>
  );
};

export default Step;
