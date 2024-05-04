import { useState } from "react";

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

const Constructor = () => {
  const [state, setState] = useState({ stepName: LOCATION, step: 0 });

  const step = state.stepName;

  return (
    <AppContext.Provider value={{ state, setState }}>
      <div className="section">
        <h1>Конструктор декора</h1>
        {step !== LOCATION && <ReturnButton />}
        {step === LOCATION && <Location />}
        {step === PODIUM && <Podium />}
        {step === ARCH && <Arch />}
        {step === FLOWERS_ARCH && <FlowersArch />}
        {step === ROAD && <Road />}
        {step === FLOWERS_ROAD && <FlowersRoad />}
        {step === CHAIRS && <Chairs />}
        {step === EMAIL_FORM && <EmailForm />}
      </div>
    </AppContext.Provider>
  );
};

export default Constructor;
