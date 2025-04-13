import IGameObject from "../interfaces/IGameObject";
import Position from "../interfaces/Position";
import Scene from "./Scene";

export default class Pawn implements IGameObject{
    position: Position;
    radius: number;
    type: string;
    speed: number;
    isCollide: boolean = false
    scene :Scene;
    
    constructor(position: Position, radius: number, type: string, speed: number,scene:Scene) {
        this.position = position
        this.radius = radius
        this.type = type
        this.speed = speed
        this.scene = scene;
    }
    render(): void {
    }
    update(): void {
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

        if (collider.type === "monster" && this.type === "light") {
            collider.position.x -= (dx / distance) * (overlap)*2;
            collider.position.y -= (dy / distance) * (overlap)*2;   
            
        }

    }
    
} 