
import Character from "../models/Character";
import LightSource from "../models/LightSource";
import Monster from "../models/Monster";
import { battery } from "../services/gameProvider";
import { mousePosition } from "../services/mouseManager";
import { translation } from "../services/translationProvider";

let monsterSpeed = 10

const lights = [
    new LightSource(mousePosition, () => battery.level, "#FEEFD5"),
    new LightSource({x:200, y: 200}, ()=> 100, "#EED094"),
]

const characters = [
    new Character({x:300, y : 400},5,() => translation, "billy", false, 20),
    new Character({x:300, y : 370},6,() => translation, "timmie", false, 20),
    new Character({ x: 300, y: 170 }, 10, () => translation, "jimmy", true, 20),
]

export var target = characters[0]
export var mainCharacter = characters[2]

const monsters = [
    new Monster({x:100,y:10}, 30, monsterSpeed),
    new Monster({x:2,y:30}, 30, monsterSpeed),
    new Monster({x:3,y:30}, 30, monsterSpeed),
    new Monster({x:4,y:30}, 30, monsterSpeed),
    new Monster({x:5,y:30}, 30, monsterSpeed),
    new Monster({x:6,y:30}, 30, monsterSpeed),
    new Monster({x:7,y:30}, 30, monsterSpeed),
]

export const scene = [
    ...monsters,
    ...characters,
    ...lights
]
