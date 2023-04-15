import { useState } from "react"

import { ChoiceSection } from "../ChoiceSection"
import { ProcessSection } from "../ProcessSection"
import { Result } from "../Result"

import "./GameSection.scss"

export const GameSection: React.FC<any> = ({ setCount }) => {
  const [gameStart, setGameStart] = useState(false)
  const [player, setPlayer] = useState(0)
  const [result, setResult] = useState<"victory" | "lose" | "draw">("draw")
  const [showResult, setShowResult] = useState(false)

  const handleClickPlayer = (player: number) => {
    setPlayer(player)
    setGameStart(true)
    setShowResult(false)
  }

  const handleClickStart = () => {
    setGameStart(false)
  }

  const render = () => {
    if (!gameStart) {
      return <ChoiceSection handleClickPlayer={handleClickPlayer} />
    } else {
      return (
        <>
          <ProcessSection
            player={player}
            setResult={setResult}
            setCount={setCount}
            showResult={showResult}
            setShowResult={setShowResult}
          />
          <Result
            handleClickStart={handleClickStart}
            result={result}
            showResult={showResult}
          />
        </>
      )
    }
  }

  return <div className="game-section">{render()}</div>
}
