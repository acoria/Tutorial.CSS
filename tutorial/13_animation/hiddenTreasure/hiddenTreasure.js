var hiddenButton = document.getElementById("hiddenButton");
var openWallButton = document.getElementById("openWall");
var wall = document.getElementById("wall");

var addLog = (element) => {
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

hiddenButton?.addEventListener("click", () => {
    hiddenButton?.classList.add("spin360");
})
addLog(wall);

var openEvent = () => {
    document.getElementById("wall")?.classList.add("slideWallToRightSide");
    openWallButton.textContent = "Close"
    openWallButton?.removeEventListener("click", openEvent);
    openWallButton?.addEventListener("click", closeEvent);
}

var closeEvent = () => {
    console.log("close event called")
    wall?.classList.remove("slideWallToRightSide");

    setTimeout(() => {
        // wall?.classList.add("slideWallToRightSide");
        wall?.classList.add("slideWallToLeftSide");
    }, 1)
    // wall?.classList.add("slideWallToLeftSide");
    // document.getElementById("wall")?.classList.add("test");
    openWallButton.textContent = "Open"
    openWallButton?.removeEventListener("click", closeEvent);
    openWallButton?.addEventListener("click", openEvent);
}

openWallButton?.addEventListener("click", () => {
    openEvent()
})