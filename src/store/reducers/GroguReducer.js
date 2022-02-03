import actionTypes from "../actions/actionTypes";

const GroguReducer = (diceNumber = 0, action) => {
  let newDiceNumber = diceNumber;

  switch (action.type) {
    case actionTypes.getDice:
      newDiceNumber = action.number;
      break;
    default:
      break;
  }

  return newDiceNumber;
};

export default GroguReducer;
