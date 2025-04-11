import Position from "../interfaces/Position";

export default class LightSource {
    position: Position;
    radius: number;
    sprite: string = "";
    color: string;


    constructor(position: Position, radius: number, color?: string) {
        this.position = position
        this.radius = radius
        this.color = color || "#FEEFD5"

    }

    render(children?: string): string {
        return (`
            <svg
            class="layer"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <filter id="blurMe">
                <feBlend in="SourceGraphic"  mode="color-dodge" />
                <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
            </filter>
            <svg x="${this.position.x - this.radius}" y="${this.position.y - this.radius}" >
            
            <circle cx="${this.radius}" cy="${this.radius}"  r="${this.radius}" fill="${this.color}" filter="url(#blurMe)" />
            <svg x="${this.radius}" y="${this.radius}" >
            ${children}
            </svg>
            </svg>
            </svg>
            `)
    }

}