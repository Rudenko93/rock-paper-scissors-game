export const compareForResult = (
  player: number,
  house: number
): "victory" | "lose" | "draw" => {
  if (player === 0 && (house === 1 || house === 3)) {
    return "victory"
  }
  if (player === 1 && (house === 2 || house === 4)) {
    return "victory"
  }
  if (player === 2 && (house === 3 || house === 0)) {
    return "victory"
  }
  if (player === 3 && (house === 4 || house === 1)) {
    return "victory"
  }
  if (player === 4 && (house === 0 || house === 2)) {
    return "victory"
  }
  if (house === 0 && (player === 1 || player === 3)) {
    return "lose"
  }
  if (house === 1 && (player === 2 || player === 4)) {
    return "lose"
  }
  if (house === 2 && (player === 3 || player === 0)) {
    return "lose"
  }
  if (house === 3 && (player === 4 || player === 1)) {
    return "lose"
  }
  if (house === 4 && (player === 0 || player === 2)) {
    return "lose"
  } else {
    return "draw"
  }
}
