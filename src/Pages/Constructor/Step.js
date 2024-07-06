import { useLocation } from "react-router-dom";

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
  STEP,
} from "../../components/constructor/store/constants";
import "../../styles/slider.css";

const Step = () => {
  const { search } = useLocation();

  const params = new URLSearchParams(search);
  const step = params.get(STEP);

  return (
    <>
      {!!search && <ReturnButton />}
      {!params.size && <Location />}
      {step === PODIUM && <Podium />}
      {step === ARCH && <Arch />}
      {step === FLOWERS_ARCH && <FlowersArch />}
      {step === ROAD && <Road />}
      {step === FLOWERS_ROAD && <FlowersRoad />}
      {step === CHAIRS && <Chairs />}
      {step === EMAIL_FORM && <EmailForm />}
    </>
  );
};

export default Step;
