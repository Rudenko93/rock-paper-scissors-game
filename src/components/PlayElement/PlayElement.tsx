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
  return (
    <button
      className={`play-btn ${name} ${direction}`}
      onClick={() => handleClickPlayer(index)}>
      <img src={src} alt={name} />
    </button>
  )
}
