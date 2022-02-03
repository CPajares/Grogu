import { useContext } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import GroguContainer from "./components/GroguContainer/GroguContainer";
import StuffContainer from "./components/StuffContainer/StuffContainer";
import useGrogu from "./hooks/UseGrogu";
import GroguContext from "./store/contexts/GroguContext";

function App() {
  const { dice } = useGrogu();
  const { diceNumber, lives, boardSize } = useContext(GroguContext);

  return (
    <div className="App">
      <h1>Grogu Game</h1>
      <Button text={"START"}></Button>
      <Button text={"DICE"} funct={dice}></Button>
      <div className="dice">{diceNumber}</div>
      <div className="container_stuff_containers">
        {lives.map((live, index) => (
          <StuffContainer
            key={index}
            item={live}
            name={Object.keys(live)[0]}
          ></StuffContainer>
        ))}
      </div>
      <div className="container_grogu_containers">
        {Array(boardSize)
          .fill("X")
          .map((element, index) => (
            <GroguContainer
              key={index}
              containerNumber={index}
            ></GroguContainer>
          ))}
      </div>
    </div>
  );
}

export default App;
