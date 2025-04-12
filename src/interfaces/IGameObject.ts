import Position from "./Position";

export default interface IGameObject {
    position: Position;
    radius: number;
    type: string;
    checkCollisions(scene: IGameObject[]): void;
}