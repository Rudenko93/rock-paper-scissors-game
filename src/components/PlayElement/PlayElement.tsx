import "./PlayElement.scss"

interface IPlayElementProps {
  name: string
  src: string
  direction?: "null" | "player" | "house"
  handleClickPlayer?: (player: number) => void
  index?: number
}

export const PlayElement: React.FC<IPlayElementProps> = ({
  name,
  src,
  direction = "null",
  handleClickPlayer,
  index,
}) => {
  const onClick = (): void => {
    if (
      typeof index === "undefined" ||
      typeof handleClickPlayer === "undefined"
    )
      return
    handleClickPlayer(index)
  }
  return (
    <button
      className={`play-btn ${name} ${direction}`}
      onClick={() => onClick()}>
      <img src={src} alt={name} />
    </button>
  )
}
