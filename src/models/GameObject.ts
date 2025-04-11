import { mousePosition } from "../mouseManager";

export default class GameObject extends HTMLElement
{
    //TODO : pipe up event data
    /**
     * mouse
     * key
     * then trigger
     */
    /**
     *
     */
    constructor() {
        super();
    }


    mouseStatus()
    {
        return mousePosition;
    }
} 