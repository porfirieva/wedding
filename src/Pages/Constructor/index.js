import { useState } from "react";

import ReturnButton from "../../components/constructor/ReturnButton";
import FlowersArch from "../../components/constructor/FlowersArch";
import Arch from "../../components/constructor/Arch";
import Road from "../../components/constructor/Road";
import FlowersRoad from "../../components/constructor/FlowersRoad";
import Chairs from "../../components/constructor/Chairs";
import Podium from "../../components/constructor/Podium";
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
import Location from "../../components/constructor/Location";
import EmailForm from "../../components/constructor/EmailForm";

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
