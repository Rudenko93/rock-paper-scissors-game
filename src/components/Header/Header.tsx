import "./Header.scss"

export const Header: React.FC<Record<string, number>> = ({ count }) => {
  return (
    <header>
      <img className="logo" src="./images/logo-bonus.svg" alt="" />
      <div className="score">
        <span>SCORE</span>
        <div className="count">{count}</div>
      </div>
    </header>
  )
}
