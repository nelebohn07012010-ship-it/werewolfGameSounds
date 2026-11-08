import { useGame } from "./context/context";
import "./GameScreen.css"
import DayScreen from "./DayScreen";
import NightScreen from "./NightScreen";
import { useState } from "react";

function GameScreen() {

  const [nightSelected, setNightSelected] = useState<boolean>(true)

  const [count, setCount] = useState<number>(1)

  const { setGameRunning } = useGame()

  function CountDays() {
    setNightSelected(!nightSelected)
    setCount(count + 0.5)
  }

  return (
    <div id="game-screen">
      <div id="round">RUNDE {Math.floor(count)}</div>
      <div id="exit" onClick={() => setGameRunning(false)}>x</div>
      <div id="change-area">
        <div id="tag" onClick={() => CountDays()} className={!nightSelected ? "selected" : ""}>Tag</div>
        <div id="nacht" onClick={() => CountDays()} className={nightSelected ? "selected" : ""}>Nacht</div>
      </div>
      <div id="role-display">
        {nightSelected ? (<NightScreen />) : (<DayScreen />)}
      </div>
    </div>
  )
}

export default GameScreen
