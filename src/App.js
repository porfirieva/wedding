import { useState } from "react";

import Location from "./components/Location";
import { AppContext } from "./store/AppContext";
import StartPage from "./components/StartPage";
import ReturnButton from "./components/ReturnButton";
import Header from "./components/Header/Header";
import FlowersArch from "./components/FlowersArch";
import {
  ARCH,
  CHAIRS,
  FLOWERS_ARCH,
  FLOWERS_ROAD,
  LOCATION,
  PODIUM,
  ROAD,
  START_PAGE,
} from "./store/constants";
import Arch from "./components/Arch";
import Hero from "./components/Hero";
import Road from "./components/Road";
import FlowersRoad from "./components/FlowersRoad";
import Chairs from "./components/Chairs";
import Podium from "./components/Podium";

function App() {
  const [state, setState] = useState({ stepName: START_PAGE, step: 0 });

  const step = state.stepName;

  return (
    <div className="container">
      <Header />
      <h1 className="text">Создай свой идеальный декор</h1>
      {step === START_PAGE && <Hero />}
      <AppContext.Provider value={{ state, setState }}>
        {step !== START_PAGE && <ReturnButton />}
        {step === START_PAGE && <StartPage />}
        {step === LOCATION && <Location />}
        {step === PODIUM && <Podium />}
        {step === ARCH && <Arch />}
        {step === FLOWERS_ARCH && <FlowersArch />}
        {step === ROAD && <Road />}
        {step === FLOWERS_ROAD && <FlowersRoad />}
        {step === CHAIRS && <Chairs />}
      </AppContext.Provider>
    </div>
  );
}

export default App;
