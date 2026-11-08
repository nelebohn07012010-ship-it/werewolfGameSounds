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
    werwolf: ["erwachen", "wählen", "gewählt"],
    amor: ["erwachen", "verlieben", "ansehen"],
    seherin: ["erwachen", "ansehen"],
    hexe: ["erwachen", "heilen", "töten"],
    jäger: ["erschießen"],
    lästerschwestern: [],
    urwolf: [],
    gBWolf: [],
    doppelgänger: [],
    fuchs: [],
    ritter: [],
    rassist: [],
    bärenführer: [],
    wildeKind: [],
    wolfshund: [],
    weißerWerwolf: [],
    flötenspieler: [],
    engel: [],
  }
}

export type Role = keyof typeof Config.roles

export default Config