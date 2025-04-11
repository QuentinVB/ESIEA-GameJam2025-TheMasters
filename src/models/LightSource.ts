import Position from "../interfaces/Position";
import GameObject from "./GameObject";
//import "./follower.css";
export default class LightSource extends GameObject {
  position: Position;
  radius: number;
  sprite: string = "";
  color: string;

  constructor(radius: number, color?: string) {
    super();
    this.position = this.mouseStatus();
    this.radius = radius;
    this.color = color || "#FEEFD5" || String(this.getAttribute("color"));

    //this.classList.add("follower");
    //TODO : handle node children
  }
  connectedCallback() {
    this.innerHTML = `
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
            </svg>
            </svg>
            `;
  }
  disconnectedCallback() {
    console.log("Custom square element removed from page.");
  }

  adoptedCallback() {
    console.log("Custom square element moved to new page.");
  }
}
