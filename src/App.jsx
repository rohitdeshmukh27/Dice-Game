import { use, useState } from "react";
import HandlingPage from "./components/HandlingPage";
import GamePlay from "./components/GamePlay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGameStart = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <>
      {isGameStarted ? <GamePlay /> : <HandlingPage toggle={toggleGameStart} />}
    </>
  );
}

export default App;
