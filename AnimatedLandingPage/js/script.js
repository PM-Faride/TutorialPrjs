let body = document.querySelector("body");
let hideShowBtn = body.querySelectorAll("button");
let pageContainer = body.querySelector(".page-container");
let circle = body.querySelector(".close-open");
let nav = body.querySelector("nav");
console.log(pageContainer);
hideShowBtn.forEach(btn => {
    btn.addEventListener("click", function(e) {
        circle.classList.toggle("rotate");
        pageContainer.classList.toggle("move");
        if (circle.classList.contains("rotate")) {

            body.style.backgroundColor = "#333";
            setTimeout(() => {
                nav.classList.add("show");
            }, 300);


        } else {
            nav.classList.remove("show");
            setTimeout(() => {

                body.style.backgroundColor = "#fff";
            }, 500);
        }
    });
});