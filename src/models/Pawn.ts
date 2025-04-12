import IGameObject from "../interfaces/IGameObject";
import Position from "../interfaces/Position";

export default class Pawn implements IGameObject{
    position: Position;
    radius: number;
    type: string;
    speed: number;
    isCollide: boolean = false

    constructor(position: Position, radius: number, type: string, speed: number) {
        this.position = position
        this.radius = radius
        this.type = type
        this.speed = speed
    }


    checkCollisions(scene: IGameObject[]): void {
        for (const obj of scene) {
            if (obj !== this && this.isCollidingWith(obj)) {
                if (this.type === "character" && obj.type === "light") {
                    
                } else {
                    this.handleCollision(obj);

                }
            }
        }
    }

    isCollidingWith(collider: IGameObject): boolean {
        const dx = this.position.x - collider.position.x;
        const dy = this.position.y - collider.position.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance < this.radius + collider.radius;
    }

    handleCollision(collider: IGameObject): void {
        this.isCollide=true
        const dx = this.position.x - collider.position.x;
        const dy = this.position.y - collider.position.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const overlap = (this.radius + collider.radius) - distance;

        this.position.x += (dx / distance) * (overlap );
        this.position.y += (dy / distance) * (overlap );

        collider.position.x -= (dx / distance) * (overlap / 2);
        collider.position.y -= (dy / distance) * (overlap / 2);   
    }
    
} 