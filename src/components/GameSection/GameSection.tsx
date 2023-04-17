import { useState } from "react"

import { ChoiceSection } from "../ChoiceSection"
import { ProcessSection } from "../ProcessSection"
import { Result } from "../Result"

import "./GameSection.scss"

interface IGameSection {
  setCount: React.Dispatch<React.SetStateAction<number>>
}

export const GameSection: React.FC<IGameSection> = ({
  setCount,
}): JSX.Element => {
  const [gameStart, setGameStart] = useState<boolean>(false)
  const [player, setPlayer] = useState<number>(0)
  const [result, setResult] = useState<"victory" | "lose" | "draw">("draw")
  const [showResult, setShowResult] = useState<boolean>(false)

  const handleClickPlayer = (player: number) => {
    setPlayer(player)
    setGameStart(true)
    setShowResult(false)
  }

  const handleClickStart = () => {
    setGameStart(false)
  }

  const render = (): JSX.Element => {
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
