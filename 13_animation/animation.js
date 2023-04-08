const addAndRemoveCssClass = (element, cssClass, delayForRemovingCssClass = 2000) => {
    element?.addEventListener("click", () => {
        element?.classList.add(cssClass);
        setTimeout(() => { element?.classList.remove(cssClass) }, delayForRemovingCssClass)
    })
}
addAndRemoveCssClass(document.getElementById("wiggleButton"), "wiggle", 800);
addAndRemoveCssClass(document.getElementById("defaultAnimation"), "defaultAnimation");
addAndRemoveCssClass(document.getElementById("directionAlternate"), "directionAlternate");
addAndRemoveCssClass(document.getElementById("directionReverse"), "directionReverse");
addAndRemoveCssClass(document.getElementById("fillModeForwards"), "fillModeForwards", 3000);
addAndRemoveCssClass(document.getElementById("fillModeBackwards"), "fillModeBackwards", 4000);
addAndRemoveCssClass(document.getElementById("fillModeBoth"), "fillModeBoth", 4000);
addAndRemoveCssClass(document.getElementById("test"), "test", 4000);
