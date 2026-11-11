import schlafen from "./assets/schlafen.m4a"
import schlafen2 from "./assets/schlafen2.m4a"
import unschuldigerStirbt from "./assets/unschuldigerStirbt.m4a"
import werwolfStirbt from "./assets/werwolfStirbt.m4a"


const Config = {
  sounds: {
    schlafen,
    schlafen2,
    unschuldigerStirbt,
    werwolfStirbt

  },

  roles: {
    Werwolf: ["erwacht", "Opfer wählen", "Opfer gewählt"],
    Amor: ["erwacht", " zwei verlieben", "die zwei Verliebten sehen sich an"],
    Seherin: ["erwacht", "eine Karte ansehen"],
    Hexe: ["erwacht", "heilen", "töten"],
    Jäger: ["erschießen"],
    Lästerschwestern: ["erwachen"],
    Urwolf: ["erwacht"],
    GroßerBöserWolf: ["erwacht"],
    Doppelgänger: ["erwacht", "kopiert Rolle"],
    Fuchs: ["erwacht", "wählt ein dreiergruppe"],
    RitterRost: ["Werwolf stirbt an der Klinge"],
    Rassist: ["gewinnt"],
    Bärenführer: ["brummen"],
    WildeKind: ["erwacht", "sucht sich ein Vorbild"],
    Wolfshund: ["erwacht"],
    WeißerWerwolf: ["erwacht", "Operwählen"],
    Flötenspieler: ["erwacht", "verzaubern", "Verzauberte erwachen"],
    Engel: ["gewinnt"],
  }
}

export type Role = keyof typeof Config.roles

export default Config