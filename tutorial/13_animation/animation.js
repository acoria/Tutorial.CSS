const addAndRemoveCssClass = (element, cssClass, delayForRemovingCssClass = 2000) => {
    element?.addEventListener("click", () => {
        element?.classList.add(cssClass);
        setTimeout(() => { element?.classList.remove(cssClass) }, delayForRemovingCssClass)
    })
    element.addEventListener("animationstart", (event) => {
        console.log("Animation started", event)
    })
    element.addEventListener("animationend", (event) => {
        console.log("Animation ended", event)
    })
    element.addEventListener("animationiteration", (event) => {
        console.log("Animation iteration", event)
    })
}
addAndRemoveCssClass(document.getElementById("wiggleButton"), "wiggle", 800);
addAndRemoveCssClass(document.getElementById("defaultAnimation"), "default-animation");
addAndRemoveCssClass(document.getElementById("directionAlternate"), "direction-alternate");
addAndRemoveCssClass(document.getElementById("directionReverse"), "direction-reverse");
addAndRemoveCssClass(document.getElementById("fillModeForwards"), "fill-mode-forwards", 3000);
addAndRemoveCssClass(document.getElementById("fillModeBackwards"), "fill-mode-backwards", 4000);
addAndRemoveCssClass(document.getElementById("fillModeBoth"), "fill-mode-both", 4000);
addAndRemoveCssClass(document.getElementById("test"), "test", 4000);

