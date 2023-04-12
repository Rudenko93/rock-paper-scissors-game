import "./Header.scss"

export const Header: React.FC = () => {
  return (
    <header>
      <img className="logo" src="./images/logo-bonus.svg" alt="" />
      <div className="score">
        <span>SCORE</span>
        <div className="count">10</div>
      </div>
    </header>
  )
}
