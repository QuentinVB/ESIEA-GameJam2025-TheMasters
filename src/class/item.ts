import "./item.css";
export default class Item extends HTMLElement {
  private x : Number = 0;
  private y : Number = 0;
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerText = "🧿";
    this.classList.add("item");
    this.x = Number(this.getAttribute("x"));
    this.y= Number(this.getAttribute("y"));

  }
  disconnectedCallback() {
    console.log("Custom square element removed from page.");
  }

  adoptedCallback() {
    console.log("Custom square element moved to new page.");
  }
}
