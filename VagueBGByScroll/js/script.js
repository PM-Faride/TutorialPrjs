let photo = document.querySelector("header");
window.addEventListener("scroll", function(e) {
    photo.style.opacity = 1 - window.pageYOffset / (window.innerHeight / 1.3);
})