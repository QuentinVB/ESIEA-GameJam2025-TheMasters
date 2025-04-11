import { Fire } from "./components/lightSource/fire";
import { FlashLight } from "./components/lightSource/flashlight"
import { mousePosition } from "./mouseManager";
import Follower from './class/follower';
import Item from './class/item';
import Scene from './class/scene';
window.customElements.define("game-scene", Scene);
window.customElements.define("game-follower", Follower);
window.customElements.define("game-item", Item);

import './style.css'



const addAssets = () => {
  const lights = document.querySelector<HTMLDivElement>('#light')
  var content = ""
  content += Fire({ x: 500, y: 500 })
  content += FlashLight(mousePosition)
  lights!.innerHTML = content
}

const main = () => {
  addAssets()
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

