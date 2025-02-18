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
            circleBlue.classList.remove('circle-active');
            circleLightBlue.classList.add('circle-active');
        }

        const mouseoutFank = () => {
            circleBlue.classList.add('circle-active');
            circleLightBlue.classList.remove('circle-active');
        }

        mouseOwnerNumber.addEventListener('mouseover', mouseoverFank);
        mouseOwnerNumber.addEventListener('mouseout', mouseoutFank);
    }

    // Функция для проверки позиции элемента
    function checkElementPositionOneBox() {
        const section = document.querySelector('.redactor-coda');
        const sectionStickyOne = document.querySelector('.jump-page-one');

        if (!section && !sectionStickyOne) return; // Проверка существования элемента

        const rect = section.getBoundingClientRect();
        const isAtTop = rect.top <= 0;

        if (isAtTop) {
            console.log('Элемент достиг верха окна!');
            // Здесь можно добавить свои действия
            sectionStickyOne.style.position = `relative`;
        } else {
            sectionStickyOne.style.position = `sticky`;
        }
    }

    function checkElementPositionTwoBox() {
        const section = document.querySelector('.cards');
        let cardsHeight = section.offsetHeight;
        // console.log(cardsHeight);
        const sectionElems = document.querySelectorAll('.card-item');
        // console.log(sectionElems);
        const sectionStickyTwo = document.querySelector('.jump-page-two');

        if (!section && !sectionStickyTwo) return; // Проверка существования элемента

        const rect = section.getBoundingClientRect();
        const isAtTop = rect.top <= 0;

        if (isAtTop) {
            console.log('Элемент достиг верха окна!');
            // Здесь можно добавить свои действия
            sectionStickyTwo.style.position = `relative`;

            sectionElems.forEach((elem) => {
                elem.style.position = `sticky`;
            })
            // sectionElem.style.position = `sticky`;
        } else {
            sectionStickyTwo.style.position = `sticky`;
            sectionElems.forEach((elem) => {
                elem.style.position = `relative`;
            })

        }
    }

// Запуск проверки при скролле и загрузке страницы
    window.addEventListener('scroll', function () {
        requestAnimationFrame(checkElementPositionOneBox);
        requestAnimationFrame(checkElementPositionTwoBox);
    });

// Первоначальная проверка при загрузке
    window.addEventListener('DOMContentLoaded', checkElementPositionOneBox, checkElementPositionTwoBox);


    // табы
    // Получаем все элементы табов
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    if (tabButtons && tabContents) {

        // Активируем первый таб при загрузке
        tabButtons[0].classList.add('tab-btn-active');
        tabContents[0].classList.add('tab-content-active');
        // Добавляем обработчик событий для каждой кнопки
        tabButtons.forEach(button => {

            button.addEventListener('click', () => {
                // Удаляем активный класс у всех кнопок и контента
                tabButtons.forEach(btn => btn.classList.remove('tab-btn-active'));
                tabContents.forEach(content => content.classList.remove('tab-content-active'));

                // Добавляем активный класс к выбранной кнопке
                button.classList.add('tab-btn-active');

                // Показываем соответствующий контент
                const targetTab = document.getElementById(button.dataset.tab);
                targetTab.classList.add('tab-content-active');
            });
        });
    }


})