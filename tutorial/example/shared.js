var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalNegativeButton = document.querySelector(".modal__action--negative");
var tourButtons = document.querySelectorAll(".tours button")
var navMenuToggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

for (var i = 0; i < tourButtons.length; i++) {
    tourButtons[i].addEventListener("click", () => {
        changeElementOpacity(modal)
        toggleBackdrop()
    });
}

backdrop?.addEventListener("click", function () {
    toggleMobileNav(false)
    // changeElementVisibility(mobileNav, false)
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

function toggleMobileNav(showMobileNav = true) {
    if (showMobileNav) {
        mobileNav?.classList.add("mobile-nav__visible")
    } else {
        mobileNav?.classList.remove("mobile-nav__visible")
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

navMenuToggleButton?.addEventListener('click', function () {
    // changeElementVisibility(mobileNav)
    toggleMobileNav()
    toggleBackdrop()
});
