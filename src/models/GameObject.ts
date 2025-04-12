import Position from "../interfaces/Position";
import CollisionBox from "./CollisionBox";
import { v4 as uuidv4 } from 'uuid';

export default class GameObject {
    id:string = uuidv4()
    collisionBox: CollisionBox



    constructor(position: Position, raduis: number) {
        this.collisionBox = new CollisionBox(position, raduis, this.id)
    }
}