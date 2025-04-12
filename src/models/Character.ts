import Position from "../interfaces/Position";
import Translation from "../interfaces/Translation";

export default class Character {
    position: Position
    speed: number

    constructor(position: Position, speed: number, public getTranslation: () => Translation) {
        this.position = position
        this.speed = speed
    }

    render() {
        const translation = this.getTranslation()
        if (translation.direction === "up")
            this.position.y -= this.speed
        if (translation.direction === "down")
            this.position.y += this.speed
        if (translation.direction === "right")
            this.position.x += this.speed
        if (translation.direction === "left")
            this.position.x -= this.speed


        return `<svg
            class="layer"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <rect width="100" height="100" x="${this.position.x}" y="${this.position.y}" />

            </svg>`
    }
}