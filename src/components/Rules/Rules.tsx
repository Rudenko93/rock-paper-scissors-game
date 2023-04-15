import { useState } from "react"
import "./Rules.scss"

export const Rules: React.FC = () => {
  const [showRules, setShowRules] = useState(false)

  const render = () => {
    if (showRules)
      return (
        <div className="modal">
          <h1>rules</h1>
          <img src="./images/image-rules-bonus.svg" alt="rules" />
          <button className="close-btn" onClick={() => setShowRules(false)}>
            <img src="./images/icon-close.svg" alt="close" />
          </button>
        </div>
      )
  }
  return (
    <div className="rules">
      <button className="rules-btn" onClick={() => setShowRules(true)}>
        rules
      </button>
      {render()}
    </div>
  )
}
