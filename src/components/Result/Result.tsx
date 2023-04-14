import "./Result.scss"

interface IResultProps {
  handleClickStart: any
}

export const Result: React.FC<IResultProps> = ({ handleClickStart }) => {
  return (
    <div className="result">
      <h1>you win</h1>
      <button className="result-btn" onClick={handleClickStart}>
        play again
      </button>
    </div>
  )
}
