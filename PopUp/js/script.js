let close = document.querySelector("#close-modal");
let showModal = document.querySelector("#show-modal");
let container = document.querySelector(".container");
close.addEventListener("click", function() {
    container.classList.toggle("show");
});
showModal.addEventListener("click", function() {
    container.classList.toggle("show");
    // console.log(container.style.opacity);
});