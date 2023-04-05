var appearButton = document.getElementById("hideBox");
var box = document.querySelector(".visibleBox");

appearButton?.addEventListener("click", () => {
    if (box.style.opacity == 1 || box.style.opacity == '') {
        box.style.opacity = 0;
    } else {
        box.style.opacity = 1;
    }

})