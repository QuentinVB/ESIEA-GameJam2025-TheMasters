import Position from "../interfaces/Position";
import Translation from "../interfaces/Translation";
import { characterFactory, CharacterList } from "../services/characterFactory";
import Pawn from "./Pawn";
import { v4 as uuidv4 } from 'uuid';
import Scene from "./Scene";
import { mainCharacter } from "../scenes/scene1";

const EPSILON = 45;

export default class Character extends Pawn {
    state: string = "idle"
    name: string
    controlled: boolean
    id: string = uuidv4()

    constructor(position: Position, speed: number, public getTranslation: () => Translation, name: string, controlled: boolean, radius: number,scene:Scene) {
        super(position, radius, "character", speed,scene )
        this.name = name
        this.controlled = controlled
    }

    runForLife(target: Character) {
        if (target.id === this.id) {
            return
        }
        const dx = target.position.x - this.position.x;
        const dy = target.position.y - this.position.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if(distance< EPSILON) return;

        const directionX = dx / distance;
        const directionY = dy / distance;
        
        this.position.x += directionX * this.speed;
        this.position.y += directionY * this.speed;
        return distance;
    }
    
    
    render() {
        this.checkCollisions(this.scene.gameobjects);
        this.runForLife(mainCharacter);
        
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