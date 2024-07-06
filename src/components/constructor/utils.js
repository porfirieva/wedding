import { LOCATIONS } from "./store/constants";

export const getStep = (id) => LOCATIONS.find((el) => el.id === id);

export const getStepData = (id, stepName) =>
  getStep(id).steps.find((el) => el.name === stepName);

export const updateSearchParams = (search, title, value) => {
  const params = new URLSearchParams(search);

  params.set(title, value);

  return {
    params,
  };
};
