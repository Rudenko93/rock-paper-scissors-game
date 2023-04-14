import { PlayElement } from "../PlayElement"
import { playElements } from "../../playElements"
import "./ChoiceSection.scss"

interface IChoiceSectionProps {
  handleClickPlayer: any
}

export const ChoiceSection: React.FC<IChoiceSectionProps> = ({
  handleClickPlayer,
}) => {
  return (
    <div className="choice-section">
      <img
        className="choice-section-bg"
        src="./images/bg-pentagon.svg"
        alt="pentagon"
      />
      <div className="play-elements">
        {playElements.map((elem, index) => (
          <PlayElement
            name={elem.name}
            src={elem.url}
            key={elem.name}
            handleClickPlayer={handleClickPlayer}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}
