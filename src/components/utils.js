export const getStep = (state, step = 1) => {
  return {
    stepName: state.location.steps[state.step + step].name,
    step: state.step + step,
  };
};
