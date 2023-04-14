import { useState, useEffect } from "react"

import { ChoiceSection } from "../ChoiceSection"
import { playElements } from "../../playElements"
import "./GameSection.scss"
import { ProcessSection } from "../ProcessSection"
import { Result } from "../Result"
import { getRandomInt } from "../../helpers/getRandomInt"

export const GameSection: React.FC = () => {
  const [gameStart, setGameStart] = useState(false)
  const [player, setPlayer] = useState(0)
  const [house, setHouse] = useState(0)
  const [emptyHouse, setEmptyHouse] = useState(true)

  const handleClickPlayer = (player: number) => {
    setPlayer(player)
    setGameStart(true)
    setHouse(getRandomInt())
  }

  useEffect(() => {
    const interval = setTimeout(() => {
      setEmptyHouse(false)
    }, 2000)

    return () => clearTimeout(interval)
  }, [gameStart])

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
            player={playElements[player]}
            house={playElements[house]}
            emptyHouse={emptyHouse}
          />
          <Result handleClickStart={handleClickStart} />
        </>
      )
    }
  }

  return <div className="game-section">{render()}</div>
}
