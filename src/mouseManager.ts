import Position from "./interfaces/Position";

export const mousePosition: Position = { x: 0, y: 0 }

document.addEventListener('mousemove', function (event) {
    mousePosition.x = event.x
    mousePosition.y = event.y
    // console.log(mousePosition);
});