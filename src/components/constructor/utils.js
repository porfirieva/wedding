import { LOCATIONS } from "./store/constants";

export const getStep = (id) => {
  return LOCATIONS.find((el) => el.id === id);
};

export const updateSearchParams = (state, step, value) => {
  if (state.includes(step)) {
    const params = new URLSearchParams(state);
    params.delete(step);
    return {
      search: `${params}&${step}=${value}`,
    };
  }
  return {
    search: `${state}&${step}=${value}`,
  };
};
