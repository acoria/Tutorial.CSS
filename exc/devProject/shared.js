var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalNegativeButton = document.querySelector(".modal__action--negative");
var selectTourButtons = document.querySelectorAll(".tours button")
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

for (var i = 0; i < selectTourButtons.length; i++) {
    selectTourButtons[i].addEventListener("click", () => {
        changeElementVisibility(modal)
        changeElementVisibility(backdrop)
    });
}

backdrop?.addEventListener("click", function () {
    changeElementVisibility(mobileNav, false)
    closeModal();
});

modalNegativeButton?.addEventListener("click", closeModal)

function changeElementVisibility(element, visible = true) {
    if (element === undefined || element === null) {
        return;
    }
    if (visible) {
        element.style.display = 'block'
    } else {
        element.style.display = 'none'
    }
}
function closeModal() {
    changeElementVisibility(backdrop, false)
    changeElementVisibility(modal, false)
}

toggleButton?.addEventListener('click', function () {
    changeElementVisibility(mobileNav)
    changeElementVisibility(backdrop)
});
