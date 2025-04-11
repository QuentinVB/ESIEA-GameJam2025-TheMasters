import { Fire } from "./components/lightSource/fire";
import { FlashLight } from "./components/lightSource/flashlight"
import { mousePosition } from "./mouseManager";




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