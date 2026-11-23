import "./LandingScreen.css"
import { useGame } from "./context/context"
import Config from "./Config"




function LandingScreen() {

  const { isPlaying, playSelectedFile, endRecording, selectedRoles, toggleRole, setGameRunning, holdButton, showInput, selectFile, showFileSelection, selectedFile, submitFile, showPropertySelection, activeButton, close, recording, isRecording } = useGame()



  return (
    <div id="landing-screen">
      <div id="heading">WEREWOLF SOUNDS</div>
      {showPropertySelection && (
        <div id="property-selection">
          <div className="close" onClick={close}>x</div>
          <div id="top">Aktion wählen</div>
          {activeButton.current ? Config.roles[activeButton.current].map((property) => <div className="property-select" onClick={() => showFileSelection(`${activeButton.current?.toLocaleLowerCase()}-${property.replace(/\s+/g, "-").toLocaleLowerCase()}`)}>{property}</div>) : "Keine Rolle ausgewählt"}
        </div>
      )}
      {showInput && (
        <div>
          <input id="audio-select" type="file" accept="audio/*" onChange={selectFile} />
          <div className="label">
            <div className="close" onClick={close}>x</div>
            <div id="select-field" onClick={playSelectedFile} className={`${selectedFile ? "selected" : ""} ${isPlaying ? "playing" : ""}`}>{selectedFile?.name || "Keine Datei ausgewählt"}</div>
            <label htmlFor="audio-select">
              <div>Audio Datei wählen...</div>
            </label>
            <div onClick={recording}>Audio Datei aufnehmen...</div>
            <div onClick={submitFile}>Bestätigen</div>
          </div>
        </div>
      )}
      {isRecording && (<div id="recording">
        <div className="black">Recorder</div>
        <div id="ct">
          <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div id="ending" onClick={endRecording}> ⏹</div>
        </div>
      </div>)}
      <div id="select-area">
        <div>Welche Rollen sind dabei?</div>
        <div id="roles">
          <div onPointerDown={() => holdButton("Werwolf")} onPointerUp={() => toggleRole("Werwolf")} className={selectedRoles.includes("Werwolf") ? "selected" : ""}>Werwolf</div>

          <div className={selectedRoles.includes("Amor") ? "selected" : ""} onPointerDown={() => holdButton("Amor")} onPointerUp={() => toggleRole("Amor")}>Amor</div>

          <div onPointerDown={() => holdButton("Seherin")} onPointerUp={() => toggleRole("Seherin")} className={selectedRoles.includes("Seherin") ? "selected" : ""}>Seherin</div>

          <div onPointerDown={() => holdButton("Hexe")} onPointerUp={() => toggleRole("Hexe")} className={selectedRoles.includes("Hexe") ? "selected" : ""}>Hexe</div>

          <div onPointerDown={() => holdButton("Jäger")} onPointerUp={() => toggleRole("Jäger")} className={selectedRoles.includes("Jäger") ? "selected" : ""}>Jäger</div>

          <div onPointerDown={() => holdButton("Lästerschwestern")} onPointerUp={() => toggleRole("Lästerschwestern")} className={selectedRoles.includes("Lästerschwestern") ? "selected" : ""}>Lästerschwestern</div>

          <div onPointerDown={() => holdButton("Urwolf")} onPointerUp={() => toggleRole("Urwolf")} className={selectedRoles.includes("Urwolf") ? "selected" : ""}>Urwolf</div>

          <div onPointerDown={() => holdButton("GroßerBöserWolf")} onPointerUp={() => toggleRole("GroßerBöserWolf")} className={selectedRoles.includes("GroßerBöserWolf") ? "selected" : ""}>Großer Böser Wolf</div>

          <div onPointerDown={() => holdButton("Doppelgänger")} onPointerUp={() => toggleRole("Doppelgänger")} className={selectedRoles.includes("Doppelgänger") ? "selected" : ""}>Doppelgänger</div>

          <div onPointerDown={() => holdButton("Fuchs")} onPointerUp={() => toggleRole("Fuchs")} className={selectedRoles.includes("Fuchs") ? "selected" : ""}>Fuchs</div>

          <div onPointerDown={() => holdButton("RitterRost")} onPointerUp={() => toggleRole("RitterRost")} className={selectedRoles.includes("RitterRost") ? "selected" : ""}>Ritter Rost</div>

          <div onPointerDown={() => holdButton("Rassist")} onPointerUp={() => toggleRole("Rassist")} className={selectedRoles.includes("Rassist") ? "selected" : ""}>Rassist</div>

          <div onPointerDown={() => holdButton("Bärenführer")} onPointerUp={() => toggleRole("Bärenführer")} className={selectedRoles.includes("Bärenführer") ? "selected" : ""}>Bärenführer</div>

          <div onPointerDown={() => holdButton("WildeKind")} onPointerUp={() => toggleRole("WildeKind")} className={selectedRoles.includes("WildeKind") ? "selected" : ""}>Wilde Kind</div>

          <div onPointerDown={() => holdButton("Wolfshund")} onPointerUp={() => toggleRole("Wolfshund")} className={selectedRoles.includes("Wolfshund") ? "selected" : ""}>Wolfshund</div>

          <div onPointerDown={() => holdButton("WeißerWerwolf")} onPointerUp={() => toggleRole("WeißerWerwolf")} className={selectedRoles.includes("WeißerWerwolf") ? "selected" : ""}>Weiße Werwolf</div>

          <div onPointerDown={() => holdButton("Flötenspieler")} onPointerUp={() => toggleRole("Flötenspieler")} className={selectedRoles.includes("Flötenspieler") ? "selected" : ""}>Flötenspieler</div>

          <div onPointerDown={() => holdButton("Engel")} onPointerUp={() => toggleRole("Engel")} className={selectedRoles.includes("Engel") ? "selected" : ""}>Engel</div>
        </div>
      </div>
      <div id="start-button" onClick={() => setGameRunning(true)}>
        Start
      </div>
    </div>

  )
}

export default LandingScreen