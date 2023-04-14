import { Header } from "./components/Header"
import "./App.scss"
import { GameSection } from "./components/GameSection"
import { Rules } from "./components/Rules"

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <GameSection />
        <Rules />
      </div>
    </div>
  )
}

export default App
