import CollisionBox from "./CollisionBox";
import Position from "./Position";

export default interface Pawn {
    position: Position
    name: string
    collisionBox: CollisionBox | null
}