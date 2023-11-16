const aLinks = document.querySelectorAll("a");
let background = document.querySelector("body");
for (let i = 0; i < aLinks.length; i++) {
    aLinks[i].addEventListener("click", function(e) {
        changeBGColor(e, aLinks[i].style.backgroundColor)
    });
}
const changeBGColor = function(e, color) {
    e.preventDefault();
    background.style.backgroundColor = color;
}