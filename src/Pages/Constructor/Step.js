import { useContext } from "react";

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
import { AppContext } from "../../components/constructor/store/AppContext";
import {
  ARCH,
  CHAIRS,
  FLOWERS_ARCH,
  FLOWERS_ROAD,
  LOCATION,
  PODIUM,
  ROAD,
  EMAIL_FORM,
} from "../../components/constructor/store/constants";
import "../../styles/slider.css";

const Step = () => {
  const { state } = useContext(AppContext);
  const step = state.stepName;

  return (
    <>
      {step !== LOCATION && <ReturnButton />}
      {step === LOCATION && <Location />}
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
