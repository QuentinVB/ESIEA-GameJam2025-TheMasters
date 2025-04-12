import Game from "../models/Game"

export const game = new Game()

export const battery = { level: game.battery }

document.addEventListener("battery", (event) => {
    const customEvent = event as CustomEvent<{ battery: number }>;
    battery.level = customEvent.detail.battery;
});