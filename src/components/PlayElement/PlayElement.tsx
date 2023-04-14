import "./PlayElement.scss"

interface IPlayElementProps {
  name: string
  src: string
}

export const PlayElement: React.FC<IPlayElementProps> = ({ name, src }) => {
  return (
    <button className={`play-btn ${name}`}>
      <img src={src} alt={name} />
    </button>
  )
}
