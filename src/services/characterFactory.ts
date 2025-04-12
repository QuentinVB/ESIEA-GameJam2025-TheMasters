import { animationFactory, AnimationState } from "./animationFactory";
export type CharacterList = keyof typeof characterFactory;

export const characterFactory = {
    jimmy: {
        getAnimations : (state:string) => "/sprites/Owlet_Monster/Owlet_Monster_" + animationFactory[state as AnimationState] 
    },
    timmie: {
        getAnimations : (state:string) => "/sprites/Dude_Monster/Dude_Monster_" + animationFactory[state as AnimationState] 
    },
    billy: {
        getAnimations : (state:string) => "/sprites/Pink_Monster/Pink_Monster_" + animationFactory[state as AnimationState] 
    }
}