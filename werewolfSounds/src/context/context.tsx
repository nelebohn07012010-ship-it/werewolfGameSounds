import { createContext, useContext, useState } from "react";
import { useRef } from "react";
import type { Role } from "../Config"
import { getAudioFile } from "../lib/audioService";
import { uploadAudioFile } from "../lib/audioService";


const Context = createContext<ContextType | null>(null)

type ContextType = {
  selectedRoles: Role[]
  toggleRole: (role: Role) => void
  gameRunning: boolean
  setGameRunning: (state: boolean) => void
  playSound: (sound: string) => Promise<void>
  audioRef: React.RefObject<HTMLAudioElement | null>
  playedSound: string
  holdButton: (button: Role) => void
  showInput: boolean
  setShowInput: (state: boolean) => void
  selectFile: (e: React.ChangeEvent<HTMLInputElement>) => void
  selectedFile: File | null
  submitFile: () => void
  showPropertySelection: boolean
  activeButton: React.RefObject<Role>
  showFileSelection: (name: string) => void
  close: () => void
}

export function Provider({ children }: { children: React.ReactNode }) {

  const [selectedRoles, changeSelectedRoles] = useState<Role[]>(["Werwolf", "Hexe", "Amor", "Seherin", "Jäger"])
  const [gameRunning, setGameRunning] = useState<boolean>(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playedSound, setPlayedSound] = useState<string>("")
  const currentURL = useRef<string | null>(null)
  const timer = useRef<number | undefined>(undefined)
  const [showInput, setShowInput] = useState<boolean>(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const activeButton = useRef<Role>(undefined)
  const fileName = useRef<string | null>(null)
  const [showPropertySelection, setShowPropertySelection] = useState<boolean>(false)

  function toggleRole(role: Role) {
    clearTimeout(timer.current)
    if (selectedRoles.includes(role)) {
      changeSelectedRoles(selectedRoles.filter((item) => item !== role))
    } else {
      changeSelectedRoles([...selectedRoles, role])
    }
  }

  function showFileSelection(name: string) {
    setShowInput(true)
    setShowPropertySelection(false)
    const cleanName = name.replace(/ä/g, "ae")
      .replace(/ö/g, "oe")
      .replace(/ü/g, "ue")
      .replace(/ß/g, "ss");
    fileName.current = cleanName
    console.log(fileName.current)
  }

  function holdButton(button: Role) {
    timer.current = setTimeout(() => {
      setShowPropertySelection(true)
      activeButton.current = button
    }, 800);
  }

  function selectFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  }

  function submitFile() {
    if (selectedFile && fileName.current) {
      uploadAudioFile(fileName.current, selectedFile)
    }
    activeButton.current = undefined
    fileName.current = null
    setSelectedFile(null)
    setShowInput(false)
  }

  function close() {
    setSelectedFile(null)
    activeButton.current = undefined
    fileName.current = null
    setShowInput(false)
    setShowPropertySelection(false)
  }


  async function playSound(sound: string) {

    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0;
      if (currentURL.current) {
        URL.revokeObjectURL(currentURL.current)
      }
    }

    const cleanSound = sound.replace(/ä/g, "ae")
      .replace(/ö/g, "oe")
      .replace(/ü/g, "ue")
      .replace(/ß/g, "ss");

    const audio = await getAudioFile(cleanSound);
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

  return (<Context.Provider value={{ selectedRoles, toggleRole, gameRunning, setGameRunning, playSound, audioRef, playedSound, holdButton, showInput, setShowInput, selectFile, selectedFile, submitFile, showPropertySelection, activeButton, showFileSelection, close }}>{children}</Context.Provider>)

}

export function useGame() {
  const context = useContext(Context)

  if (!context) {
    throw new Error('useGame muss innerhalb von Provider verwendet werden')
  }

  return context
}