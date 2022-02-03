import { useReducer, useState } from "react";

import GroguReducer from "../reducers/GroguReducer";
import GroguContext from "./GroguContext";

const GroguContextProvider = ({ children }) => {
  const [diceNumber, dispatch] = useReducer(GroguReducer, "");
  const [groguState, setGroguState] = useState(0);

  const itemsSize = 3;
  const [lives, setLives] = useState([
    { frogs: Array(itemsSize).fill("X") },
    { eggs: Array(itemsSize).fill("X") },
    { cookies: Array(itemsSize).fill("X") },
  ]);

  const boardSize = 6;

  return (
    <GroguContext.Provider
      value={{
        diceNumber,
        dispatch,
        lives,
        setLives,
        groguState,
        setGroguState,
        boardSize,
      }}
    >
      {children}
    </GroguContext.Provider>
  );
};

export default GroguContextProvider;
