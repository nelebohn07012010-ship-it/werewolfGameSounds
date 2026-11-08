import { Provider } from './context/context'
import LandingScreen from './LandingScreen'
import { useGame } from './context/context'
import Gamescreen from "./GameScreen"

import './App.css'

function AppContent() {

  const { gameRunning } = useGame()

  return (
    <div id="app-screen">
      {gameRunning ? (<Gamescreen />) : (<LandingScreen />)}
    </div>
  )
}

function App() {



  return (
    <Provider>
      <AppContent />
    </Provider>
  )
}

export default App
