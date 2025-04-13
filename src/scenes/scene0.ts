import { IUpdatable } from "../interfaces/IUpdatable";
import Scene from "../models/Scene";
//import { enterFullScreen } from "../services/browserManager";

class Menu extends Scene{
    teardown(): void {
        document.getElementById("screen1")!.style.display="none";
    }

    elements: IUpdatable[];
    /**
     *
     */
    constructor() {
        super();
        this.elements=[];
    }
    start() : void{

        document.getElementById("screen1")!.style.display="block";

        const play= document.getElementById("play");
        play!.addEventListener("click",_=>{
            console.log("play");
            //enterFullScreen(document.documentElement);
            this.engine?.loadScene(1);
            //backgroundSound.play();
        });
    }

    render(): string {
        return ``;
    }

    update(): void {
        throw new Error("Method not implemented.");
    }
}



export default Menu;
