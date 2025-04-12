import Position from "../interfaces/Position";
import Translation from "../interfaces/Translation";
import { characterFactory, CharacterList } from "../services/characterFactory";
import { scene } from "../scenes/scene1";
import Pawn from "./Pawn";

export default class Character extends Pawn {
    state: string = "idle"
    name: string
    controlled: boolean

    constructor(position: Position, speed: number, public getTranslation: () => Translation, name: string, controlled: boolean, radius: number) {
        super(position, radius, "character", speed )
        this.name = name
        this.controlled = controlled
    }
    
    
    render() {
        this.checkCollisions(scene)
        const translation = this.controlled ? this.getTranslation() : { direction: "" }
        
        if (translation.direction) {
            this.state = "run"
        } else {
            this.state = "idle"
        }


        if (translation.direction === "up")
            this.position.y -= this.speed
        if (translation.direction === "down")
            this.position.y += this.speed
        if (translation.direction === "right")
            this.position.x += this.speed
        if (translation.direction === "left")
            this.position.x -= this.speed
        

        var url = characterFactory[this.name as CharacterList].getAnimations(this.state)
        var direction = 1
        translation.direction === "left" ? direction = -1 : direction = 1
        
        var radius = 20

        return `
        
        <div class="character" style='background: url("${url}"); top : ${this.position.y}px; left : ${this.position.x}px; animation: sprite .5s steps(6) infinite; transform: scale(${direction}, 1); ' >
        <div style="position:absolute;border-radius: 50%;  width:${radius*2}px; height:${radius*2}px; /*border: 1px solid ${this.isCollide ? "yellow" : "blue"}*/ " ></div>
        
        </div>
        
            `
    }
}