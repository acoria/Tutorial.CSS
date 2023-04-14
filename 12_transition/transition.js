var visibilityButton = document.getElementById("toggleVisibilityButton");
var visibleBox = document.querySelector(".visible-box");
var positionButton = document.getElementById("togglePositionBoxButton")
var leftTogglePositionBox = document.querySelector(".left-toggle-position-box")
var timingFunctionButton = document.getElementById("timingFunctionButton");
var easeBox = document.querySelector(".left-box-ease");
var easeInBox = document.querySelector(".left-box-ease-in");
var linearBox = document.querySelector(".left-box-linear");
var easeOutBox = document.querySelector(".left-box-ease-out");
var cubicBezierBox = document.querySelector(".left-box-cubic-bezier");

visibilityButton?.addEventListener("click", () => toggleClassOnElement(visibleBox, "invisible-box"));
positionButton?.addEventListener("click", () => toggleClassOnElement(leftTogglePositionBox, "right-box"));
timingFunctionButton?.addEventListener("click", () => toggleBoxes());

function toggleBoxes(){
    toggleClassOnElement(easeBox, "right-box");
    toggleClassOnElement(linearBox, "right-box");
    toggleClassOnElement(easeInBox, "right-box");
    toggleClassOnElement(easeOutBox, "right-box");
    toggleClassOnElement(cubicBezierBox, "right-box");
}
function toggleClassOnElement(element, classToToggle) {
    if (element.classList.contains(classToToggle)) {
        element.classList.remove(classToToggle);
    } else {
        element.classList.add(classToToggle);
    }
}