import IGameObject from "../interfaces/IGameObject";
import { IScene } from "../interfaces/IScene";
import { IUpdatable } from "../interfaces/IUpdatable";

/**
 * Basic class to buildup scene
 */
export default abstract class Scene  implements IScene
{
    abstract start(): void;
    abstract render(): void;
    abstract update(): void ;

    elements!: IUpdatable[];
    public get gameobjects(): IGameObject[] {
        return this.elements.filter((obj): obj is IGameObject => {
            return typeof (obj as any).draw === "function";
          });
    }

    public set gameobjects(value) {
        this.elements = value;
    }

}