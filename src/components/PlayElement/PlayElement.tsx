import "./PlayElement.scss"

interface IPlayElementProps {
  name: string
  src: string
  direction?: "null" | "player" | "house"
  handleClickPlayer?: any
  index?: number
}

export const PlayElement: React.FC<IPlayElementProps> = ({
  name,
  src,
  direction = "null",
  handleClickPlayer,
  index,
}) => {
  const onClick = () => {
    if (index === 0 || index) {
      handleClickPlayer(index)
    } else {
      return
    }
  }
  return (
    <button
      className={`play-btn ${name} ${direction}`}
      onClick={() => onClick()}>
      <img src={src} alt={name} />
    </button>
  )
}
