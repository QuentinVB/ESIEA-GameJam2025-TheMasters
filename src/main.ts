import { scene } from "./scenes/scene1";
import { game } from "./services/gameProvider";


const update = () => {
  const app = document.querySelector<HTMLDivElement>('#app')
  var content = ""
  scene.forEach(element => {
    content += element.render()
  })
  app!.innerHTML = content
  game.render()
}


const main = () => {
  update()
  setTimeout(() => {
    
    requestAnimationFrame(main)
  }, 50);
}

requestAnimationFrame(main)