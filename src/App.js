import { useState } from "react";

import Location from "./components/Location";
import { AppContext } from "./store/AppContext";
import StartPage from "./components/StartPage";
import ReturnButton from "./components/ReturnButton";
import Header from "./components/Header";
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
} from "./constants";
import Arch from "./components/Arch";
import Hero from "./components/Hero";
import Road from "./components/Road";
import FlowersRoad from "./components/FlowersRoad";
import Chairs from "./components/Chairs";
import Podium from "./components/Podium";

function App() {
  const [state, setState] = useState({ step: START_PAGE });

  return (
    <div className="container">
      <Header />
      <h1 className="text">Создай свой идеальный декор</h1>
      {state.step === START_PAGE && <Hero />}
      <AppContext.Provider value={{ state, setState }}>
        {state.step !== START_PAGE && <ReturnButton />}
        {state.step === START_PAGE && <StartPage />}
        {state.step === LOCATION && <Location />}
        {state.step === PODIUM && <Podium />}
        {state.step === ARCH && <Arch />}
        {state.step === FLOWERS_ARCH && <FlowersArch />}
        {state.step === ROAD && <Road />}
        {state.step === FLOWERS_ROAD && <FlowersRoad />}
        {state.step === CHAIRS && <Chairs />}
      </AppContext.Provider>
    </div>
  );
}

export default App;
