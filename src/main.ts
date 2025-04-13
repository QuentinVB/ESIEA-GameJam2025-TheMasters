import Engine from "./models/Engine";
import scene0 from "./scenes/scene0";
import scene1 from "./scenes/scene1";

const backgroundSound = new Audio("/sounds/bbc_crickets-s_nhu0509310.mp3");
backgroundSound.loop =true;
backgroundSound.volume = 0.2;
const sounds = {
    "crickets":backgroundSound
}

const app = document.querySelector<HTMLDivElement>('#app')!;
const scenes = [
    new scene0(),
    new scene1(),
]
const engine = new Engine(scenes,app,0,sounds);
engine.start();
engine.run();