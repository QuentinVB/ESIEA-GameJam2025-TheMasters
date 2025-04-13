
import { IUpdatable } from "../interfaces/IUpdatable";
import Character from "../models/Character";
import LightSource from "../models/LightSource";
import Monster from "../models/Monster";
import { mousePosition } from "../services/mouseManager";
import { translation } from "../services/translationProvider";
import Scene from "../models/Scene";
import Engine from "../models/Engine";

export var target: Character ;
export var mainCharacter: Character;
export var battery :any;


class Game extends Scene{


    elements: IUpdatable[];
    time: number = 0
    battery: number = 100

    /**
     *
     */
    constructor() {
        super();
        
        let monsterSpeed = 5;

        battery = { level: this.battery }

        const lights = [
            new LightSource(mousePosition, () => battery.level, this,"#FEEFD5"),
            new LightSource({x:200, y: 200}, ()=> 100,this, "#EED094"),
        ]

        const characters = [
            new Character({x:300, y : 400},5,() => translation, "billy", false, 20,this),
            new Character({x:300, y : 370},6,() => translation, "timmie", false, 20,this),
            new Character({ x: 300, y: 170 }, 10, () => translation, "jimmy", true, 20,this),
        ]

        target = characters[0];
        mainCharacter = characters[2];

        const monsters = [
            new Monster({x:100,y:10}, 30, monsterSpeed,this),
            new Monster({x:2,y:30}, 30, monsterSpeed,this),
            new Monster({x:3,y:30}, 30, monsterSpeed,this),
            new Monster({x:4,y:30}, 30, monsterSpeed,this),
            new Monster({x:5,y:30}, 30, monsterSpeed,this),
            new Monster({x:6,y:30}, 30, monsterSpeed,this),
            new Monster({x:7,y:30}, 30, monsterSpeed,this),
        ]

        this.elements= [
            ...monsters,
            ...characters,
            ...lights
        ]

    }


    render(): void {
    }

    start() : void{
        document.getElementById("screen2")!.style.display="block";
        console.log(this.gameobjects);
    }
    update(): void {
        if (this.battery > 0) {
            this.battery -= .01;
        }
        const batteryEvent = new CustomEvent("battery", {
            detail: {
                battery: this.battery
            },
        });

        document.dispatchEvent(batteryEvent);

        (document.getElementById("battery") as HTMLElement).style.width = this.battery + "px";
    }
    teardown(): void {
        document.getElementById("screen2")!.style.display="none";
        
    }
}

document.addEventListener("battery", (event) => {
    const customEvent = event as CustomEvent<{ battery: number }>;
    battery.level = customEvent.detail.battery;
});

export default Game;