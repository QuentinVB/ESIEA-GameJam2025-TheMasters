
import Character from "../models/Character";
import LightSource from "../models/LightSource";
import { battery } from "../services/gameProvider";
import { mousePosition } from "../services/mouseManager";
import { translation } from "../services/translationProvider";

export const scene = [
    new LightSource({ x: 200, y: 200 }, () => 80, "#EED094"),
    new Character({ x: 200, y: 200 }, 10, () => translation, "jimmy", false),
    new Character({ x: 400, y: 200 }, 10, () => translation, "timmie", true),
    new Character({ x: 300, y: 200 }, 10, () => translation, "billy", false),
    new LightSource(mousePosition, () => battery.level, "#FEEFD5"),
]