import IGameObject from "../interfaces/IGameObject";
import { IScene } from "../interfaces/IScene";
import { IUpdatable } from "../interfaces/IUpdatable";
import Engine from "./Engine";

/**
 * Basic class to buildup scene
 */
export default abstract class Scene implements IScene {
  init(engine:Engine): void
  {
    this.engine = engine;
    this.start();
  };
  abstract start(): void;
  abstract render(): void;
  abstract update(): void;
  abstract teardown(): void;

  engine: Engine | undefined;


  elements!: IUpdatable[];
  public get gameobjects(): IGameObject[] {
    return this.elements.filter((obj): obj is IGameObject => {
      return typeof (obj as any).type === "string";
    });
  }

  public set gameobjects(value) {
    this.elements = value;
  }
}
