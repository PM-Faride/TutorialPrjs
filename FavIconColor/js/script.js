let buttons = document.querySelectorAll("button");
let favicon = document.querySelector("#favicon");
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        if (button.id === "grey") {
            favicon.setAttribute("href", "images/grey.png");
        } else {
            favicon.setAttribute("href", "images/black.png");
        }
    })
})