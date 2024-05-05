import { useState } from "react";

import { AppContext } from "../../components/constructor/store/AppContext";
import { LOCATION } from "../../components/constructor/store/constants";
import Step from "./Step";

const Constructor = () => {
  const [state, setState] = useState({ stepName: LOCATION, step: 0 });

  return (
    <AppContext.Provider value={{ state, setState }}>
      <div className="section">
        <h1>Конструктор декора</h1>
        <Step />
      </div>
    </AppContext.Provider>
  );
};

export default Constructor;
