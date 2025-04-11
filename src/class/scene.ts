import "./scene.css";
export default class Scene extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerText = "toto";
    this.classList.add("scene");
  }
  disconnectedCallback() {
    console.log("Custom square element removed from page.");
  }

  adoptedCallback() {
    console.log("Custom square element moved to new page.");
  }
}
