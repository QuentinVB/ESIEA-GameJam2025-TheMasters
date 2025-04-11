import LightSource from "./models/LightSource";

import Follower from './class/follower';
import Item from './class/item';
import Scene from './class/scene';
window.customElements.define("game-scene", Scene);
window.customElements.define("game-follower", Follower);
window.customElements.define("game-item", Item);
window.customElements.define("game-lightsource", LightSource);



const main = () => {
  requestAnimationFrame(main)
}
requestAnimationFrame(main)


//const scene = document.createElement("game-scene") as Scene;

const app = document.querySelector<HTMLDivElement>('#app');

fetch('/scenes/scene1.xml')
.then((response) => response.text())
.then((text) => {
    app!.innerHTML = text;
});

//app!.append(scene);

