import { IUpdatable } from "../interfaces/IUpdatable";
import Scene from "../models/Scene";
import { enterFullScreen } from "../services/browserManager";

class Menu extends Scene{

    elements: IUpdatable[];
    /**
     *
     */
    constructor() {
        super();
        this.elements=[];
    }
    start() : void{
        const play= document.getElementById("play");
        play!.addEventListener("click",e=>{
            console.log("play");
            //enterFullScreen(document.documentElement);
            //backgroundSound.play();
        });
    }

    render(children?: string): string {
        return ``;
    }

    update(): void {
        throw new Error("Method not implemented.");
    }
}



export default new Menu()
