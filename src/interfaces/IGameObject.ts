import { IUpdatable } from "./IUpdatable";
import Position from "./Position";

export default interface IGameObject extends IUpdatable {
    position: Position;
    radius: number;
    type: string;
    checkCollisions(scene: IGameObject[]): void;
}