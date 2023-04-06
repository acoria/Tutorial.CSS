var visibilityButton = document.getElementById("toggleVisibilityButton");
var visibleBox = document.querySelector(".visibleBox");
var positionButton = document.getElementById("togglePositionBoxButton")
var leftTogglePositionBox = document.querySelector(".leftTogglePositionBox")
var timingFunctionButton = document.getElementById("timingFunctionButton");
var easeBox = document.querySelector(".leftBoxEase");
var easeInBox = document.querySelector(".leftBoxEaseIn");
var linearBox = document.querySelector(".leftBoxLinear");
var easeOutBox = document.querySelector(".leftBoxEaseOut");
var cubicBezierBox = document.querySelector(".leftBoxCubicBezier");

visibilityButton?.addEventListener("click", () => toggleClassOnElement(visibleBox, "invisibleBox"));
positionButton?.addEventListener("click", () => toggleClassOnElement(leftTogglePositionBox, "rightBox"));
timingFunctionButton?.addEventListener("click", () => toggleBoxes());

function toggleBoxes(){
    toggleClassOnElement(easeBox, "rightBox");
    toggleClassOnElement(linearBox, "rightBox");
    toggleClassOnElement(easeInBox, "rightBox");
    toggleClassOnElement(easeOutBox, "rightBox");
    toggleClassOnElement(cubicBezierBox, "rightBox");
}
function toggleClassOnElement(element, classToToggle) {
    if (element.classList.contains(classToToggle)) {
        element.classList.remove(classToToggle);
    } else {
        element.classList.add(classToToggle);
    }
}