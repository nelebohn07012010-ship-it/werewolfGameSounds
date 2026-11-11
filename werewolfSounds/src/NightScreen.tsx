import "./NightScreen.css"
import { useGame } from "./context/context"
import Config, { type Role } from "./Config"


function NightScreen() {
  const roleProperties = Config.roles
  const { selectedRoles } = useGame()

  function displayProperties(role: Role) {

    const filteredRoles = roleProperties[role]?.filter((role) => role.includes("erwacht"))

    return (
      <details>
        <summary>{role}</summary>
        <div key={role}>
          {filteredRoles.map((property) => (
            <div className="property" key={property}>{property}</div>
          ))}
        </div>
      </details>
    )

  }

  return (
    <div id="night-screen">
      {selectedRoles?.map((role) => displayProperties(role))}
    </div>
  )
}

export default NightScreen