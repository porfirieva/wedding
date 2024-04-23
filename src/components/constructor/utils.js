import { LOCATION } from "./store/constants";

export const getStep = (state, step = 1) => {
  const stepName = state.location
    ? state.location.steps[state.step + step].name
    : LOCATION;

  return {
    stepName,
    step: state.step + step,
  };
};
