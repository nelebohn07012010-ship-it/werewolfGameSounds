import { createContext, useContext, useState } from "react";
import { useRef } from "react";
import type { Role } from "../Config"
import { getAudioFile } from "../lib/audioService";

const Context = createContext<ContextType | null>(null)

type ContextType = {
  selectedRoles: Role[]
  toggleRole: (role: Role) => void
  gameRunning: boolean
  setGameRunning: (state: boolean) => void
  playSound: (sound: string) => Promise<void>
  audioRef: React.RefObject<HTMLAudioElement | null>
  playedSound: string
  selectFile: () => void
  showInput: boolean
  setShowInput: (state: boolean) => void
}

export function Provider({ children }: { children: React.ReactNode }) {

  const [selectedRoles, changeSelectedRoles] = useState<Role[]>(["Werwolf", "Hexe", "Amor", "Seherin", "Jäger"])
  const [gameRunning, setGameRunning] = useState<boolean>(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playedSound, setPlayedSound] = useState<string>("")
  const currentURL = useRef<string | null>(null)
  const timer = useRef<number | undefined>(undefined)
  const [showInput, setShowInput] = useState<boolean>(false)

  function toggleRole(role: Role) {
    clearTimeout(timer.current)
    if (selectedRoles.includes(role)) {
      changeSelectedRoles(selectedRoles.filter((item) => item !== role))
    } else {
      changeSelectedRoles([...selectedRoles, role])
    }
  }

  function selectFile() {
    timer.current = setTimeout(() => {
      setShowInput(true)
    }, 800);

  }

  async function playSound(sound: string) {

    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0;
      if (currentURL.current) {
        URL.revokeObjectURL(currentURL.current)
      }
    }

    const audio = await getAudioFile(sound);
    currentURL.current = URL.createObjectURL(audio)

    audioRef.current = new Audio(currentURL.current);

    audioRef.current.play()
    setPlayedSound(sound)

    audioRef.current.addEventListener("ended", () => {
      setPlayedSound("")
      if (currentURL.current) {
        URL.revokeObjectURL(currentURL.current)
      }
    });
  }

  return (<Context.Provider value={{ selectedRoles, toggleRole, gameRunning, setGameRunning, playSound, audioRef, playedSound, selectFile, showInput, setShowInput }}>{children}</Context.Provider>)

}

export function useGame() {
  const context = useContext(Context)

  if (!context) {
    throw new Error('useGame muss innerhalb von Provider verwendet werden')
  }

  return context
}