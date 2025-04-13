import Scene from "./Scene";

export default class Engine
{
    scenes : Scene[];
    scene : Scene;
    ctx: HTMLDivElement;
    gameLoopHandle : number | undefined;

    constructor(scenes:Scene[],contexte:HTMLDivElement,sceneToStartIdx:number)
    {
      this.scenes = scenes
        this.scene=scenes[sceneToStartIdx] ;
        this.ctx = contexte;
    }

    /**
     * Run once at the start of the engine (ex:init scene)
     */
    start()
    {
        this.scene.init(this);
    }

    /**
     * run the engine by updating the frame
     */
    run()
    {
        //TODO : improve performances ?
        const main = () => {
            this.update()
            this.gameLoopHandle = setTimeout(() => {
          
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

  loadScene(sceneIdx:number){
    //stop
    clearTimeout(this.gameLoopHandle);
    this.scene.teardown();

    //load
    this.scene = this.scenes[sceneIdx];
    
    //run
    this.scene.init(this);
    this.run();
  }
}