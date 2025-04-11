import "./follower.css";
export default class Follower extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerText = "😎";
    this.classList.add("item");

    document.addEventListener("mousemove",e=>{
        this.style.left=e.pageX+"px";
        this.style.top=e.pageY+"px";
    });
  }
  disconnectedCallback() {
    console.log("Custom square element removed from page.");
  }

  adoptedCallback() {
    console.log("Custom square element moved to new page.");
  }
}
