import "./PlayElement.scss"

interface IPlayElementProps {
  name: string
  src: string
  direction?: "null" | "player" | "house"
}

export const PlayElement: React.FC<IPlayElementProps> = ({
  name,
  src,
  direction = "null",
}) => {
  return (
    <button className={`play-btn ${name} ${direction}`}>
      <img src={src} alt={name} />
    </button>
  )
}
