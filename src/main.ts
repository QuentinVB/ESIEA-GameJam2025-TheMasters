import Engine from "./models/Engine";
import scene0 from "./scenes/scene0";
import scene1 from "./scenes/scene1";

const app = document.querySelector<HTMLDivElement>('#app')!;
const scenes = [
    new scene0(),
    new scene1(),
]
const engine = new Engine(scenes,app,0);
engine.start();
engine.run();