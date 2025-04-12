export default class Game {
    time: number = 0
    battery: number = 100

    render() {
        if (this.battery > 0) {
            this.battery -= 0.01;
        }
        const batteryEvent = new CustomEvent("battery", {
            detail: {
                battery: this.battery
            },
        });

        document.dispatchEvent(batteryEvent);

        (document.getElementById("battery") as HTMLElement).style.width = this.battery + "px";
    }
}