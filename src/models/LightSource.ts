import Position from "../interfaces/Position";

export default class LightSource {
  constructor(
    public position: Position,
    public getRadius: () => number,
    public color?: string
  ) { }

  render(children?: string): string {
    const radius = this.getRadius();
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
            <svg x="${this.position.x - radius * 2}" y="${this.position.y - radius * 2}" >
            
            <circle cx="${radius * 2}" cy="${radius * 2}" r="${radius}" fill="${this.color}EE" filter="url(#blurMe)" />
            <circle cx="${radius * 2}" cy="${radius * 2}" r="${radius * 2}" fill="${this.color}05" filter="url(#blurMe)" />
            <circle cx="${radius * 2}" cy="${radius * 2}" r="${radius * 1.5}" fill="${this.color}12" filter="url(#blurMe)" />
            <svg x="${radius}" y="${radius}" >
            ${children}
            </svg>
            </svg>
            </svg>
            `)
  }

}