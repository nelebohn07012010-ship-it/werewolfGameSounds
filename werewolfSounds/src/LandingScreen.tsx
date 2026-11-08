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
          <div onClick={() => toggleRole("werwolf")} className={selectedRoles.includes("werwolf") ? "selected" : ""}>Werwolf</div>

          <div className={selectedRoles.includes("amor") ? "selected" : ""} onClick={() => toggleRole("amor")}>Amor</div>

          <div onClick={() => toggleRole("seherin")} className={selectedRoles.includes("seherin") ? "selected" : ""}>Seherin</div>

          <div onClick={() => toggleRole("hexe")} className={selectedRoles.includes("hexe") ? "selected" : ""}>Hexe</div>

          <div onClick={() => toggleRole("jäger")} className={selectedRoles.includes("jäger") ? "selected" : ""}>Jäger</div>

          <div onClick={() => toggleRole("lästerschwestern")} className={selectedRoles.includes("lästerschwestern") ? "selected" : ""}>Lästerschwestern</div>

          <div onClick={() => toggleRole("urwolf")} className={selectedRoles.includes("urwolf") ? "selected" : ""}>Urwolf</div>

          <div onClick={() => toggleRole("g-b-Wolf")} className={selectedRoles.includes("g-b-Wolf") ? "selected" : ""}>Großer Böser Wolf</div>

          <div onClick={() => toggleRole("doppelgänger")} className={selectedRoles.includes("doppelgänger") ? "selected" : ""}>Doppelgänger</div>

          <div onClick={() => toggleRole("fuchs")} className={selectedRoles.includes("fuchs") ? "selected" : ""}>Fuchs</div>

          <div onClick={() => toggleRole("ritter")} className={selectedRoles.includes("ritter") ? "selected" : ""}>Ritter Rost</div>

          <div onClick={() => toggleRole("rassist")} className={selectedRoles.includes("rassist") ? "selected" : ""}>Rassist</div>

          <div onClick={() => toggleRole("bärenführer")} className={selectedRoles.includes("bärenführer") ? "selected" : ""}>Bärenführer</div>

          <div onClick={() => toggleRole("wilde-kind")} className={selectedRoles.includes("wilde-kind") ? "selected" : ""}>Wilde Kind</div>

          <div onClick={() => toggleRole("wolfshund")} className={selectedRoles.includes("wolfshund") ? "selected" : ""}>Wolfshund</div>

          <div onClick={() => toggleRole("weißerWerwolf")} className={selectedRoles.includes("weißerWerwolf") ? "selected" : ""}>Weiße Werwolf</div>

          <div onClick={() => toggleRole("flötenspieler")} className={selectedRoles.includes("flötenspieler") ? "selected" : ""}>Flötenspieler</div>

          <div onClick={() => toggleRole("engel")} className={selectedRoles.includes("engel") ? "selected" : ""}>Engel</div>
        </div>
      </div>
      <div id="start-button" onClick={() => setGameRunning(true)}>
        Start
      </div>
    </div>

  )
}

export default LandingScreen