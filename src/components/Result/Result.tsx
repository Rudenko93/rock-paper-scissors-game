import "./Result.scss"

interface IResultProps {
  handleClickStart: any
  result: "victory" | "lose" | "draw"
  showResult: boolean
}

export const Result: React.FC<IResultProps> = ({
  handleClickStart,
  result,
  showResult,
}) => {
  const render = () => {
    if (!showResult) {
      return
    }
    if (result === "victory") {
      return (
        <>
          <h1>you win</h1>
          <button className="result-btn" onClick={handleClickStart}>
            play again
          </button>
        </>
      )
    }
    if (result === "lose") {
      return (
        <>
          <h1>you lose</h1>
          <button className="result-btn" onClick={handleClickStart}>
            play again
          </button>
        </>
      )
    }
    if (result === "draw") {
      return (
        <>
          <h1>draw</h1>
          <button className="result-btn" onClick={handleClickStart}>
            play again
          </button>
        </>
      )
    }
  }

  return <div className="result">{render()}</div>
}
