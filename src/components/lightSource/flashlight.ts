import Position from "../../interfaces/Position";
import LightSource from "../../models/LightSource";

export const FlashLight = (position: Position): string => {
  const lightSource = new LightSource(position, 70)
  return (lightSource.render()
  )
}
