import { PlayElement } from "../PlayElement"
import { playElements } from "../../playElements"
import "./ChoiceSection.scss"

export const ChoiceSection = () => {
  return (
    <div className="choice-section">
      <img
        className="choice-section-bg"
        src="./images/bg-pentagon.svg"
        alt="pentagon"
      />
      <div className="play-elements">
        {playElements.map((elem) => (
          <PlayElement name={elem.name} src={elem.url} key={elem.name} />
        ))}
      </div>
    </div>
  )
}
