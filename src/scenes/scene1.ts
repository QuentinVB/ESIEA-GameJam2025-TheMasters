
import Character from "../models/Character";
import LightSource from "../models/LightSource";
import { battery } from "../services/gameProvider";
import { mousePosition } from "../services/mouseManager";
import { translation } from "../services/TranslationProvider";

export const scene = [
    new LightSource({ x: 200, y: 200 }, () => 80, "#EED094"),
    new Character({ x: 200, y: 200 }, 3, () => translation),
    new LightSource(mousePosition, () => battery.level, "#FEEFD5"),
]