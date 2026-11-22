import "./NightScreen.css"
import { useGame } from "./context/context"
import Config, { type Role } from "./Config"


function NightScreen() {
  const roleProperties = Config.roles
  const { selectedRoles, playSound } = useGame()

  function displayProperties(role: Role) {
    if (!role) {
      return
    }
    const properties = roleProperties[role]

    return (
      <details>
        <summary>{role}</summary>
        <div key={role}>
          {properties?.map((property) => (
            <div className="property" onClick={() => playSound(`${role.toLocaleLowerCase()}-${property.replace(/\s+/g, "-").toLocaleLowerCase()}`)} key={property}>{property}</div>
          ))}
        </div>
      </details>
    )

  }

  return (
    <div id="night-screen">
      {selectedRoles
        ?.filter((role): role is Role =>
          role !== undefined &&
          roleProperties[role]?.includes("erwacht")
        )
        .map((role) => displayProperties(role))}
    </div>
  )
}

export default NightScreen