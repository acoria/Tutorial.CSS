var button = document.getElementById("toggleButton")
var buttonContainer = document.getElementById("buttonContainer")

button?.addEventListener("click", () => {
    if (buttonContainer?.classList.contains("reverse-order")) {
        buttonContainer.classList.remove("reverse-order")
    } else {
        buttonContainer?.classList.add("reverse-order")
    }
})