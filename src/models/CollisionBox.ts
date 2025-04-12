import Position from "../interfaces/Position";

export default class CollisionBox {
    center: Position;
    radius: number

    constructor(center: Position, radius: number) {
        this.center = center
        this.radius = radius
    }

    isCollide(collider: CollisionBox) {
        if (Math.abs(collider.center.x - this.center.x) > (collider.radius + this.radius) || Math.abs(collider.center.y - this.center.y) > (collider.radius + this.radius)) {
            return false
        }
        return true
    }
}