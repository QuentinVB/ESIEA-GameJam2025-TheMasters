import Scene from './class/scene';
import './style.css'
window.customElements.define("game-scene", Scene);

//const scene = document.createElement("game-scene") as Scene;

const app = document.querySelector<HTMLDivElement>('#app');

fetch('/scenes/scene1.xml')
.then((response) => response.text())
.then((text) => {
    app!.innerHTML = text;
});

//app!.append(scene);

