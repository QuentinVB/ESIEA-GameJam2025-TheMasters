import Position from "../interfaces/Position";
import { scene } from "../scenes/scene1";
import GameObject from "./GameObject";

export default class CollisionBox {
    center: Position;
    radius: number
    id: string

    constructor(center: Position, radius: number, id: string) {
        this.center = center
        this.radius = radius
        this.id = id
    }
    
    computeCollision = (collider: GameObject) => {
        const dx = collider.collisionBox.center.x - this.center.x;
        const dy = collider.collisionBox.center.y - this.center.y;
        const distanceSq = dx * dx + dy * dy;
        const radiusSum = collider.collisionBox.radius + this.radius;
      
        return distanceSq <= radiusSum * radiusSum;
    }

    isCollide() {
        var result = false
        scene.forEach(element => {
            if (element.id !== this.id ) {
                result = this.computeCollision(element)
            }
        });
        return result
    }

    
}