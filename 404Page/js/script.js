const container = document.querySelector("body");
const moveBackgrounderer = function(event) {
    let x = event.clientX / 5;
    let y = event.clientY / 5;

    container.style.backgroundPositionX = x + "px";
    container.style.backgroundPositionY = y + "px";
}
window.addEventListener("mousemove", moveBackgrounderer, false);