import { useState } from "react"
import { Header } from "./components/Header"
import "./App.scss"
import { GameSection } from "./components/GameSection"
import { Rules } from "./components/Rules"

function App() {
  const [count, setCount] = useState<number>(0)
  return (
    <div className="app">
      <div className="container">
        <Header count={count} />
        <GameSection setCount={setCount} />
        <Rules />
      </div>
    </div>
  )
}

export default App
