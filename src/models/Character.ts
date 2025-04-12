import Position from "../interfaces/Position";
import Translation from "../interfaces/Translation";
import { v4 as uuidv4 } from 'uuid';
import { characterFactory, CharacterList } from "../services/characterFactory";

export default class Character {
    id: string = uuidv4();
    position: Position
    speed: number
    state: string = "idle"
    name: string
    controlled: boolean

    constructor(position: Position, speed: number, public getTranslation: () => Translation, name: string, controlled: boolean) {
        this.position = position
        this.speed = speed
        this.name = name
        this.controlled = controlled
    }


    controleCharacter = () => {
        
    }


    render() {
        const translation = this.controlled ? this.getTranslation() : {direction :""}

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
        

        return `
            <div class="character" id=${this.id} style='background: url("${url}"); top : ${this.position.y}px; left : ${this.position.x}px; animation: sprite .05s steps(6) infinite; transform: scale(${direction}, 1); ' ></div>
            `
    }
}