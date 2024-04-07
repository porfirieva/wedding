export const getStep = (state) => {
  return {
    name: state.location.steps[state.step.number + 1],
    number: state.step.number + 1,
  };
};
