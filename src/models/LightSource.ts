import Position from "../interfaces/Position";
import Pawn from "./Pawn";
import Scene from "./Scene";

export default class LightSource extends Pawn {
  color: string

  constructor(position: Position, public getRadius: () => number,scene:Scene, color?: string) {
    super(position, getRadius(), "light", 0,scene)
    this.color = color || "blue"
  }

  render(children?: string): string {
    this.radius = this.getRadius()
    return (`
            <div style="position:absolute;border-radius: 50%; top:${this.position.y - this.radius}px; left:${this.position.x - this.radius}px; width:${this.radius*2}px; height:${this.radius*2}px; /*border: 1px solid ${this.isCollide ? "yellow" : "blue"}*/" ></div>
            <svg
            class="layer"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <filter id="blurMe">
                <feBlend in="SourceGraphic"  mode="color-burn" />
                <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
            </filter>
            <svg x="${this.position.x - this.radius * 2}" y="${this.position.y - this.radius * 2}" >
            
            <circle cx="${this.radius * 2}" cy="${this.radius * 2}" r="${this.radius}" fill="${this.color}EE" filter="url(#blurMe)" />
            <circle cx="${this.radius * 2}" cy="${this.radius * 2}" r="${this.radius * 2}" fill="${this.color}05" filter="url(#blurMe)" />
            <circle cx="${this.radius * 2}" cy="${this.radius * 2}" r="${this.radius * 1.5}" fill="${this.color}12" filter="url(#blurMe)" />
            <svg x="${this.radius}" y="${this.radius}" >
            ${children}
            </svg>
            </svg>
            </svg>
            `)
  }

}