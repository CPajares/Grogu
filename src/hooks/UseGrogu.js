import { useContext } from "react";

import { getDiceAction } from "../store/actions/actionCreators";
import GroguContext from "../store/contexts/GroguContext";

const useGrogu = () => {
  const { dispatch, lives, setGroguState, groguState, boardSize } =
    useContext(GroguContext);

  const dice = () => {
    const number = Math.floor(Math.random() * 4) + 1;
    let checkWinnerNumber = groguState;
    if (number === 1) {
      lives[2].cookies.splice(0, 1);
    } else if (number === 2) {
      lives[1].eggs.splice(0, 1);
    } else if (number === 3) {
      lives[0].frogs.splice(0, 1);
    } else if (number === 4) {
      checkWinnerNumber = checkWinnerNumber + 1;
      setGroguState(groguState + 1);
    }

    dispatch(getDiceAction(number));
    checkWinner(checkWinnerNumber);
  };

  const checkWinner = (checkWinnerNumber) => {
    if (
      !lives[2].cookies.length &&
      !lives[1].eggs.length &&
      !lives[0].frogs.length
    ) {
      alert("Grogu se ha comido todo");
    } else if (checkWinnerNumber === boardSize - 1) {
      alert("Mando completa la misión");
    }
  };

  return {
    dice,
  };
};

export default useGrogu;
