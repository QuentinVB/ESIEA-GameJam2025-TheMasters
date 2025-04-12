
import Character from "../models/Character";
import LightSource from "../models/LightSource";
import Monster from "../models/Monster";
import { battery } from "../services/gameProvider";
import { mousePosition } from "../services/mouseManager";
import { translation } from "../services/translationProvider";

export const jimmy = new Character({x:300, y : 400},10,() => translation, "billy", false, 20)

export const scene = [
    new Monster({x:100,y:10}, 30, 30),
    new Monster({x:2,y:30}, 30, 30),
    new Monster({x:3,y:30}, 30, 30),
    new Monster({x:4,y:30}, 30, 30),
    new Monster({x:5,y:30}, 30, 30),
    new Monster({x:6,y:30}, 30, 30),
    new Monster({x:7,y:30}, 30, 30),
    new Character({x:300, y : 400},10,() => translation, "billy", false, 20),
    new Character({x:300, y : 370},10,() => translation, "timmie", false, 20),
    new Character({x:300, y : 200},10,() => translation, "jimmy", false, 20),
    new Character({ x: 300, y: 170 }, 10, () => translation, "jimmy", true, 20),
    jimmy,
    new LightSource(mousePosition, () => battery.level, "#FEEFD5"),
    // new Character({ x: 500, y: 200 }, 10, () => translation, "timmie", true),
]