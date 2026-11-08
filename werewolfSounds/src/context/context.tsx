import { createContext, useContext, useState } from "react";
import { useRef } from "react";
import type { Role } from "../Config"

const Context = createContext<ContextType | null>(null)

type ContextType = {
  selectedRoles: Role[]
  toggleRole: (role: Role) => void
  gameRunning: boolean
  setGameRunning: (state: boolean) => void
  playSound: (sound: string) => void
  audioRef: React.RefObject<HTMLAudioElement | null>
  playedSound: string
}

export function Provider({ children }: { children: React.ReactNode }) {

  const [selectedRoles, changeSelectedRoles] = useState<Role[]>(["werwolf", "hexe", "amor", "seherin", "jäger"])
  const [gameRunning, setGameRunning] = useState<boolean>(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playedSound, setPlayedSound] = useState<string>("")

  function toggleRole(role: Role) {
    if (selectedRoles.includes(role)) {
      changeSelectedRoles(selectedRoles.filter((item) => item !== role))
    } else {
      changeSelectedRoles([...selectedRoles, role])
    }
  }

  function playSound(sound: string) {

    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0;
    }


    audioRef.current = new Audio(sound);

    audioRef.current.play()
    setPlayedSound(sound)

    audioRef.current.addEventListener("ended", () => {
      setPlayedSound("")
    });
  }

  return (<Context.Provider value={{ selectedRoles, toggleRole, gameRunning, setGameRunning, playSound, audioRef, playedSound }}>{children}</Context.Provider>)

}

export function useGame() {
  const context = useContext(Context)

  if (!context) {
    throw new Error('useGame muss innerhalb von Provider verwendet werden')
  }

  return context
}