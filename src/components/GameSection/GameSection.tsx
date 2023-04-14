import { useState } from "react"

import { ChoiceSection } from "../ChoiceSection"
import { playElements } from "../../playElements"
import "./GameSection.scss"
import { ProcessSection } from "../ProcessSection"
import { Result } from "../Result"

export const GameSection: React.FC = () => {
  const [player, setPlayer] = useState(0)
  const [house, setHouse] = useState(0)

  return (
    <div className="game-section">
      {/* <ChoiceSection /> */}
      <ProcessSection
        player={playElements[player]}
        house={playElements[house]}
      />
      <Result />
    </div>
  )
}
