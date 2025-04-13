import Engine from "../models/Engine";
import IGameObject from "./IGameObject";
import { IUpdatable } from "./IUpdatable";

export interface IScene{
    init(engine:Engine): void;
    start(): void;
    render():void;
    update():void;
    teardown():void;
    elements: IUpdatable[];
    gameobjects: IGameObject[];
}