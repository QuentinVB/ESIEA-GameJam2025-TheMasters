import { Scene } from "../interfaces/IScene";

export default class Engine
{
    scene : Scene;
    ctx: HTMLDivElement;

    constructor(scene:Scene,contexte:HTMLDivElement)
    {
        this.scene=scene;
        this.ctx = contexte;
    }

    /**
     * Run once at the start of the engine (ex:init scene)
     */
    start()
    {
        this.scene.start();
    }

    /**
     * run the engine by updating the frame
     */
    run()
    {
        //TODO : improve performances ?
        const main = () => {
            this.update()
            setTimeout(() => {
          
              requestAnimationFrame(main)
            }, 50);
          }
          
          requestAnimationFrame(main)
    }

    /**
     * Update the frame by updating the state of each element
     * then render each element and call the redraw of the DOM using `innerHTML`
     */
    update () {
      //update
      this.scene.elements.forEach(element => {
        content += element.update();
      })
      //render
      var content = ""
      this.scene.elements.forEach(element => {
        content += element.render();
      })
      this.ctx!.innerHTML = content
  }
}