export const translation = {
    direction: "",
    speed: 0
}

document.addEventListener('keydown', function (event) {
    switch (event.key) {
        case 'ArrowUp':
        case 'z':
            translation.direction = "up";
            break;
        case 'ArrowDown':
        case 's':
            translation.direction = "down";
            break;
        case 'ArrowLeft':
        case 'q':
            translation.direction = "left";
            break;
        case 'ArrowRight':
        case 'd':
            translation.direction = "right";
            break;
    }
});

document.addEventListener('keyup', function () {
    translation.speed = 0;
});