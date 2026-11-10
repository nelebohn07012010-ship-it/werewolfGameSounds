import "./LandingScreen.css"
import { useGame } from "./context/context"

function LandingScreen() {

  const { selectedRoles, toggleRole, setGameRunning } = useGame()


  return (
    <div id="landing-screen">
      <div id="heading">WEREWOLF SOUNDS</div>
      <div id="select-area">
        <div>Welche Rollen sind dabei?</div>
        <div id="roles">
          <div onClick={() => toggleRole("Werwolf")} className={selectedRoles.includes("Werwolf") ? "selected" : ""}>Werwolf</div>

          <div className={selectedRoles.includes("Amor") ? "selected" : ""} onClick={() => toggleRole("Amor")}>Amor</div>

          <div onClick={() => toggleRole("Seherin")} className={selectedRoles.includes("Seherin") ? "selected" : ""}>Seherin</div>

          <div onClick={() => toggleRole("Hexe")} className={selectedRoles.includes("Hexe") ? "selected" : ""}>Hexe</div>

          <div onClick={() => toggleRole("Jäger")} className={selectedRoles.includes("Jäger") ? "selected" : ""}>Jäger</div>

          <div onClick={() => toggleRole("Lästerschwestern")} className={selectedRoles.includes("Lästerschwestern") ? "selected" : ""}>Lästerschwestern</div>

          <div onClick={() => toggleRole("Urwolf")} className={selectedRoles.includes("Urwolf") ? "selected" : ""}>Urwolf</div>

          <div onClick={() => toggleRole("GroßerBöserWolf")} className={selectedRoles.includes("GroßerBöserWolf") ? "selected" : ""}>Großer Böser Wolf</div>

          <div onClick={() => toggleRole("Doppelgänger")} className={selectedRoles.includes("Doppelgänger") ? "selected" : ""}>Doppelgänger</div>

          <div onClick={() => toggleRole("Fuchs")} className={selectedRoles.includes("Fuchs") ? "selected" : ""}>Fuchs</div>

          <div onClick={() => toggleRole("RitterRost")} className={selectedRoles.includes("RitterRost") ? "selected" : ""}>Ritter Rost</div>

          <div onClick={() => toggleRole("Rassist")} className={selectedRoles.includes("Rassist") ? "selected" : ""}>Rassist</div>

          <div onClick={() => toggleRole("Bärenführer")} className={selectedRoles.includes("Bärenführer") ? "selected" : ""}>Bärenführer</div>

          <div onClick={() => toggleRole("WildeKind")} className={selectedRoles.includes("WildeKind") ? "selected" : ""}>Wilde Kind</div>

          <div onClick={() => toggleRole("Wolfshund")} className={selectedRoles.includes("Wolfshund") ? "selected" : ""}>Wolfshund</div>

          <div onClick={() => toggleRole("WeißerWerwolf")} className={selectedRoles.includes("WeißerWerwolf") ? "selected" : ""}>Weiße Werwolf</div>

          <div onClick={() => toggleRole("Flötenspieler")} className={selectedRoles.includes("Flötenspieler") ? "selected" : ""}>Flötenspieler</div>

          <div onClick={() => toggleRole("Engel")} className={selectedRoles.includes("Engel") ? "selected" : ""}>Engel</div>
        </div>
      </div>
      <div id="start-button" onClick={() => setGameRunning(true)}>
        Start
      </div>
    </div>

  )
}

export default LandingScreen