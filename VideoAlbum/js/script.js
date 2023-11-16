const lis = document.querySelectorAll("li");
const images = document.querySelectorAll("img");
const links = [];
const source = document.querySelector("video");
for (const image of images) {
    links.push("video/" + image.src.slice(-5, -4) + ".mp4");
}
for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function() {
        assignUrl(i);
    })
}
const assignUrl = function(i) {
    source.src = links[i];
    console.log(source.src);
}