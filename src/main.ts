import Engine from "./models/Engine";
//import scene from "./scenes/scene0";
import scene from "./scenes/scene1";

const app = document.querySelector<HTMLDivElement>('#app')!;

const engine = new Engine(scene,app);
engine.start();
engine.run();