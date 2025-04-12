export const translation = {
    direction: "",
    speed: 0
}

document.addEventListener('keydown', function (event) {
    if (event.key === "ArrowUp" || event.key === "z") {
        translation.direction = "up";
    }
    if (event.key === "ArrowDown" || event.key === "s") {
        translation.direction = "down";
    }
    if (event.key === "ArrowLeft" || event.key === "q") {
        translation.direction = "left";
    }
    if (event.key === "ArrowRight" || event.key === "d") {
        translation.direction = "right";
    }
});

// document.addEventListener('keyup', function () {
//     translation.direction = ""
// });