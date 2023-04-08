var hiddenButton = document.getElementById("hiddenButton");
var openWallButton = document.getElementById("openWall");

hiddenButton?.addEventListener("click", () => {
    hiddenButton?.classList.add("spin360");
})

var openEvent = () => {
    document.getElementById("wall")?.classList.add("slideWallToRightSide");
    openWallButton.textContent = "Close"
    openWallButton?.removeEventListener("click", openEvent);
    openWallButton?.addEventListener("click", closeEvent);
}

var closeEvent = () => {
    console.log("close event called")
    document.getElementById("wall")?.classList.remove("slideWallToRightSide");
    document.getElementById("wall")?.classList.add("slideWallToLeftSide");
    // document.getElementById("wall")?.classList.add("test");
    openWallButton.textContent = "Open"
    openWallButton?.removeEventListener("click", closeEvent);
    openWallButton?.addEventListener("click", openEvent);
}

openWallButton?.addEventListener("click", () => {
    openEvent()
})