document.addEventListener('DOMContentLoaded', () => {

    // открытие мобильного меню
    const mobileMenu = document.getElementById('menu-mobile-box');
    const openBtnMobileMenu = document.getElementById('open-mobile-menu');
    const closeBtnMenu = document.getElementById('close-mobile-menu');

    if (mobileMenu && openBtnMobileMenu && closeBtnMenu) {
        const openMenu = () => {
            mobileMenu.classList.add('menu-mobile-box-visible');
            closeBtnMenu.classList.add('header__menu-mobile-btn_close-visible');
        }

        const closeMenu = () => {
            mobileMenu.classList.remove('menu-mobile-box-visible');
            closeBtnMenu.classList.remove('header__menu-mobile-btn_close-visible');
        }

        openBtnMobileMenu.addEventListener('click', openMenu);
        closeBtnMenu.addEventListener('click', closeMenu);
    }

// изменение голубого подсвечивания
    const circleBlue = document.querySelector('.circle-blue');
    const circleLightBlue = document.querySelector('.circle-lightblue');
    const mouseOwnerNumber = document.querySelector('.hero__body-right');

    if (circleBlue && circleLightBlue && mouseOwnerNumber) {

        const mouseoverFank = () => {
            circleBlue.classList.remove('none');
            circleLightBlue.classList.add('none');
        }

        const mouseoutFank = () => {
            circleBlue.classList.add('none');
            circleLightBlue.classList.remove('none');
        }

        mouseOwnerNumber.addEventListener('mouseover', mouseoverFank);
        mouseOwnerNumber.addEventListener('mouseout', mouseoutFank);
    }

})