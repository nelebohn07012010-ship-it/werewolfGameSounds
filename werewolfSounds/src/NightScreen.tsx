import "./NightScreen.css"
import { useGame } from "./context/context"

function NightScreen() {

  const { selectedRoles } = useGame()

  return (
    <div id="night-screen">

    </div>
  )
}

export default NightScreen