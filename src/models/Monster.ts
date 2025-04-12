import Position from "../interfaces/Position";
import { target, scene } from "../scenes/scene1";
import Character from "./Character";
import Pawn from "./Pawn";

export default class Monster extends Pawn {
    constructor(position: Position, radius: number, speed: number) {
        super(position, radius, "monster", speed)
    }

    fallForDesire(target: Character) {
        const dx = target.position.x - this.position.x;
        const dy = target.position.y - this.position.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const directionX = dx / distance;
        const directionY = dy / distance;
        
        this.position.x += directionX * this.speed;
        this.position.y += directionY * this.speed;
    }
    

    render() {
        this.checkCollisions(scene)
        if(target)
            this.fallForDesire(target)

        return (
            `
            <div style='position:absolute; top:${this.position.y}px; left:${this.position.x}px; background-color: black}; width: 50px; height: 50px; /*border: 1px solid ${this.isCollide? "yellow" : "blue"}*/ ; border-radius: 50%' >
                <div style='position: absolute; left:20px; width:5px; height: 5px; background-color:red' ></div>
                <div style='position: absolute; left:30px; width:5px; height: 5px; background-color:red' ></div>
            </div>
            `
        )
    }
}