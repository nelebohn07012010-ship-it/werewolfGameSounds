import "./NightScreen.css"
import { useGame } from "./context/context"


function NightScreen() {
  const { selectedRoles } = useGame()

  return (
    <div id="night-screen">
      {selectedRoles.map((role) => (<div>{role}</div>))}
    </div>
  )
}

export default NightScreen