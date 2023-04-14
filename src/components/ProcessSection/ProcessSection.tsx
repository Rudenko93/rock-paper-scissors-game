import { PlayElement } from "../PlayElement"
import "./ProcessSection.scss"

export const ProcessSection: React.FC<any> = ({ player, house }) => {
  return (
    <div className="process-section">
      <div className="play-item-box">
        <PlayElement
          name={player.name}
          src={player.url}
          key={player.name}
          direction={"player"}
        />
        <span className="box-desc player">you picked</span>
      </div>
      <div className="play-item-box">
        <button
          style={{
            width: "5rem",
            height: "5rem",
            border: "none",
            borderRadius: "50%",
            backgroundColor: "rgb(24, 32, 60)",
            scale: "1.1",
          }}></button>
        {/* <PlayElement
          name={house.name}
          src={house.url}
          key={house.name}
          direction={"house"}
        /> */}
        <span className="box-desc house">the house picked </span>
      </div>
    </div>
  )
}
