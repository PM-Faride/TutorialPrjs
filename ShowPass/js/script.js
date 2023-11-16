const eyeIconHolder = document.querySelector(".toggle");
const passwordInput = document.querySelector("#password");

let showHidePassword = function() {
    eyeIconHolder.classList.toggle("hide");
    if (passwordInput.type === "password") {
        passwordInput.setAttribute("type", "text");
    } else {
        passwordInput.setAttribute("type", "password");
    }
}
eyeIconHolder.addEventListener("click", showHidePassword);