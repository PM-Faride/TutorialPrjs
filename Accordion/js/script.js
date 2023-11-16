let titles = document.querySelectorAll(".accordion-title");
titles.forEach(title => {
    title.addEventListener("click", function() {
        let content = title.nextElementSibling;
        title.classList.toggle("active");
        if (!content.style.height) {
            content.style.height = content.scrollHeight + "px";
            content.style.borderWidth = "2px";
            content.style.borderColor = "purple";
            content.style.borderStyle = "solid";
            content.style.padding = "5px";
            // console.log(content.scrollheight);
        } else {
            content.style.height = null;
            content.style.borderWidth = "0px";
            content.style.padding = "0px";
        }
        //+"px" yadet nareeeeeeeee
    })
});