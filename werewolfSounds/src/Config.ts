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
    Werwolf: ["erwachen", "wählen", "gewählt"],
    Amor: ["erwachen", "verlieben", "ansehen"],
    Seherin: ["erwachen", "ansehen"],
    Hexe: ["erwachen", "heilen", "töten"],
    Jäger: ["erschießen"],
    Lästerschwestern: [],
    Urwolf: [],
    GroßerBöserWolf: [],
    Doppelgänger: [],
    Fuchs: [],
    RitterRost: [],
    Rassist: [],
    Bärenführer: [],
    WildeKind: [],
    Wolfshund: [],
    WeißerWerwolf: [],
    Flötenspieler: [],
    Engel: [],
  }
}

export type Role = keyof typeof Config.roles

export default Config