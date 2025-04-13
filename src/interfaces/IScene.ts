import IGameObject from "./IGameObject";
import { IUpdatable } from "./IUpdatable";

export interface IScene{
    //TODO : init vs start ?
    start(): void;
    render():void;
    update():void;
    elements: IUpdatable[];
    gameobjects: IGameObject[];
}