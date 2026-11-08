import "./DayScreen.css"
import { useGame } from "./context/context"
import Config from "./Config"

function DayScreen() {

  const sounds = Config.sounds

  const { playSound, playedSound } = useGame()

  return (
    <div id="day-screen">
      <div id="wahlen">Bürgermeister wurde gewählt</div>
      <div className={playedSound == sounds.unschuldigerStirbt ? "playing" : ""} onClick={() => playSound(sounds.unschuldigerStirbt)}>Jemand unschuldiges stirbt</div>
      <div className={playedSound == sounds.werwolfStirbt ? "playing" : ""} onClick={() => playSound(sounds.werwolfStirbt)}>Ein Werwolf stirbt</div>
      <div className={playedSound == sounds.schlafen ? "playing" : ""} onClick={() => playSound(sounds.schlafen)}>Alle schlafen ein</div>
    </div>
  )
}

export default DayScreen