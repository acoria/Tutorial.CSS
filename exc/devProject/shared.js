var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalNegativeButton = document.querySelector(".modal__action--negative");
var selectTourButtons = document.querySelectorAll(".tours button")
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

for (var i = 0; i < selectTourButtons.length; i++) {
    selectTourButtons[i].addEventListener("click", () => {
        changeElementOpacity(modal)
        toggleBackdrop()
    });
}

backdrop?.addEventListener("click", function () {
    changeElementVisibility(mobileNav, false)
    closeModal();
});

modalNegativeButton?.addEventListener("click", closeModal)

function changeElementOpacity(element, opaque = false) {
    if (element === undefined || element === null) {
        return;
    }
    if (opaque) {
        element.style.opacity = 0
    } else {
        element.style.opacity = 1
    }
}

function changeElementVisibility(element, visible = true) {
    if (element === undefined || element === null) {
        return;
    }
    if (visible) {
        element.style.display = 'block'
    } else {
        element.style.display = 'none';
    }
}

function toggleBackdrop(showBackdrop = true) {
    if (showBackdrop) {
        changeElementVisibility(backdrop)
        setTimeout(() => {
            changeElementOpacity(backdrop)
        }, 10)

    } else {
        changeElementOpacity(backdrop, true)
        setTimeout(() => {
            changeElementVisibility(backdrop, false)
        }, 500)
    }
}

function closeModal() {
    toggleBackdrop(false)
    changeElementOpacity(modal, true)
}

toggleButton?.addEventListener('click', function () {
    changeElementVisibility(mobileNav)
    toggleBackdrop()
});
