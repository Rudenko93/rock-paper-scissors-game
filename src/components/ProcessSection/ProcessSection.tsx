import { useState, useEffect } from "react"
import { PlayElement } from "../PlayElement"
import { getRandomInt } from "../../helpers/getRandomInt"

import { playElements } from "../../playElements"
import { compareForResult } from "../../helpers/compareForResult"

import "./ProcessSection.scss"

export const ProcessSection: React.FC<any> = ({
  player,
  setResult,
  setCount,
  showResult,
  setShowResult,
}) => {
  const [house, setHouse] = useState(0)

  useEffect(() => {
    const interval = setTimeout(() => {
      const iHouse = getRandomInt()
      setHouse(iHouse)
      const result = compareForResult(player, iHouse)
      setResult(result)
      setCount((count: any) => {
        if (result === "victory") return (count = count + 1)
        if (result === "lose") return count === 0 ? count : count - 1
        if (result === "draw") return count
      })
      setShowResult(true)
    }, 2000)
    return () => clearTimeout(interval)
  }, [player, setCount, setResult, setShowResult])

  const render = () => {
    if (!showResult) {
      return <button className="empty-btn"></button>
    } else {
      return (
        <PlayElement
          name={playElements[house].name}
          src={playElements[house].url}
          key={playElements[house].name}
          direction={"house"}
        />
      )
    }
  }

  return (
    <div className="process-section">
      <div className="play-item-box">
        <PlayElement
          name={playElements[player].name}
          src={playElements[player].url}
          key={playElements[player].name}
          direction={"player"}
        />
        <span className="box-desc player">you picked</span>
      </div>
      <div className="play-item-box">
        {render()}
        <span className="box-desc house">the house picked </span>
      </div>
    </div>
  )
}
