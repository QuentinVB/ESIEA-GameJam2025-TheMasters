import Position from "../../interfaces/Position";
import LightSource from "../../models/LightSource";

export const Fire = (position: Position): string => {
    const lightSource = new LightSource(position, 200, "#EED094")
    return (
        lightSource.render(`<polygon fill="#FFFB0A" points="50 15, 100 100, 0 100"/>`)
    )
}
