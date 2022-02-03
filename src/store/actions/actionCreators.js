import actionTypes from "./actionTypes";

export const getDiceAction = (number) => ({
  type: actionTypes.getDice,
  number,
});
