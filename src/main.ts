<<<<<<< HEAD
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


=======
import Follower from './class/follower';
import Item from './class/item';
import Scene from './class/scene';
import './style.css'
window.customElements.define("game-scene", Scene);
window.customElements.define("game-follower", Follower);
window.customElements.define("game-item", Item);

>>>>>>> 92a630035ef802deb6e0f741b6795a4ca68786b1
//const scene = document.createElement("game-scene") as Scene;

const app = document.querySelector<HTMLDivElement>('#app');

fetch('/scenes/scene1.xml')
.then((response) => response.text())
.then((text) => {
    app!.innerHTML = text;
});

//app!.append(scene);

