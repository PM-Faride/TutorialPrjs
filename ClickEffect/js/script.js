let buttons = document.querySelectorAll("a");
for (let button of buttons) {
    button.addEventListener("click", function(e) {
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        let span = document.createElement("span");
        span.style.top = mouseY - e.target.offsetTop + "px";
        span.style.left = mouseX - e.target.offsetLeft + "px";
        button.append(span);
        setTimeout(function() {
            button.removeChild(span);
        }, 1000);
    })
}