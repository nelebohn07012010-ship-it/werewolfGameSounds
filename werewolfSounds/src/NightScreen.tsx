import "./NightScreen.css"
import { useGame } from "./context/context"
import Config, { type Role } from "./Config"


function NightScreen() {
  const roleProperties = Config.roles
  const { selectedRoles } = useGame()

  function displayProperties(role: Role) {
    return (
      <div>
        <div>{role}</div>

        <div>
          {roleProperties[role].map((property) => (
            <div key={property}>{property}</div>
          ))}
        </div>
      </div>
    )

  }

  return (
    <div id="night-screen">
      {selectedRoles.map((role) => displayProperties(role))}
    </div>
  )
}

export default NightScreen