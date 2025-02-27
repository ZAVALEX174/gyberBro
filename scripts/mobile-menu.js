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
    const mouseOwnerNumber = document.querySelector('.hero__header-text-box-description');

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

// Создаем элемент подсказки
//     const tip = document.createElement("div");
//     tip.className = "modal-hint";
//     tip.hidden = true;
//     document.body.appendChild(tip); // Лучше добавить в body
//
// // Инициализация содержимого один раз
//     tip.innerHTML = `
//     <div class="modal-hint-title">Модуль 1</div>
//     <div class="modal-hint-desc">
//         Создай свой кибер-терминал (VS Code) и загрузи протоколы Python.
//         Освой командную строку – оружие хакера.
//     </div>
//     <button class="modal-hint-close">
//     <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <g clip-path="url(#clip0_359_1350)">
//     <path d="M19.2853 1.44824L0.713867 20.0197" stroke="#000001" stroke-linecap="round" stroke-linejoin="round" />
//     <path d="M0.713867 1.44824L19.2853 20.0197" stroke="#000001" stroke-linecap="round" stroke-linejoin="round" />
//   </g>
//   <defs>
//     <clipPath id="clip0_359_1350">
//       <rect width="20" height="20" fill="white" transform="translate(0 0.734375)" />
//     </clipPath>
//   </defs>
// </svg>
// </button>
// `;

// // Обработчики событий
//     document.addEventListener("mouseover", showTip);
//     document.addEventListener("mouseout", hideTip);
//     tip.querySelector('.modal-hint-close').addEventListener('click', () => tip.hidden = true);
//
//     function showTip(event) {
//         const target = event.target.closest('[data-tooltip]');
//         if (!target) return;
//
//         let tarRect = target.getBoundingClientRect(); // координаты HTML-элемента
//         let x, y;                                  // координаты подсказки
//                                                    // подсказка по центру HTML-элемента
//         x = tarRect.x + target.offsetWidth / 2 - tip.offsetWidth / 2;
//         if (x < 0) x = 0;                          // корректируем, если вылезла слева
//
//         y = tarRect.y - tip.offsetHeight - 5;      // подсказка над HTML-элементом
//         if (y < 0) y = tarRect.y + target.offsetHeight + 5; // или под ним// HTML-элементом
//
//         tip.style.left = x + "px";                 // перемещаем подсказку
//         tip.style.top = y + "px";
//
//         tip.hidden = false;
//     }
//
//     function hideTip(event) {
//         if (!event.relatedTarget || !tip.contains(event.relatedTarget)) {
//             tip.hidden = true;
//         }
//     }

    // document.addEventListener("click", handleClick);
    // document.addEventListener("click", handleOutsideClick);
    // tip.querySelector('.modal-hint-close').addEventListener('click', () => tip.hidden = true);
    //
    // function handleClick(event) {
    //     const target = event.target.closest('[data-tooltip]');
    //     if (!target) return;
    //
    //     // Позиционируем подсказку
    //     positionTip(target);
    //     // Показываем подсказку
    //     tip.hidden = false;
    // }
    //
    // function handleOutsideClick(event) {
    //     const isTooltip = event.target.closest('[data-tooltip]');
    //     const isTip = event.target.closest('.tip'); // Замените '.tip' на класс вашей подсказки
    //
    //     // Скрываем подсказку, если клик вне элементов
    //     if (!isTooltip && !isTip) {
    //         tip.hidden = true;
    //     }
    // }
    //
    // function positionTip(target) {
    //     const tarRect = target.getBoundingClientRect();
    //
    //     // Рассчитываем координаты
    //     let x = tarRect.left + target.offsetWidth / 2 - tip.offsetWidth / 2;
    //     let y = tarRect.top - (tip.offsetHeight * 2) - 5;
    //
    //     // Корректируем позицию, если выходит за границы
    //     if (x < 0) x = 0;
    //     if (y < 0) y = tarRect.bottom + 5;
    //
    //     // Применяем стили
    //     tip.style.left = `${x}px`;
    //     tip.style.top = `${y}px`;
    // }

//     function updatePopoverPosition() {
//         const parent = document.getElementById('elem-card4-1');
//         const popover = document.getElementById('card4-1');
//
//
//         if (!parent || !popover) {
//             console.error('Элементы не найдены!');
//             return;
//         }
//
//         // Получаем координаты родителя
//         const parentRect = parent.getBoundingClientRect();
//         // Получаем размеры popover
//         const popoverRect = popover.getBoundingClientRect();
//
//
//         // popover.style.top = `${parentRect.bottom - 335}px`;
//         // popover.style.left = `${parentRect.left}px`;
//
//         // Вычисляем начальные координаты popover
//         let top = parentRect.bottom + 5; // Позиция под родителем
//         let left = parentRect.left;
//
//         // Проверяем, выходит ли popover за правую границу экрана
//         if (left + popoverRect.width > window.innerWidth) {
//             left = window.innerWidth - popoverRect.width; // Сдвигаем влево
//         }
//
//         // Проверяем, выходит ли popover за левую границу экрана
//         if (left < 0) {
//             left = 0; // Прижимаем к левому краю
//         }
//
//         // Проверяем, выходит ли popover за нижнюю границу экрана
//         if (top + popoverRect.height > window.innerHeight) {
//             top = parentRect.top - popoverRect.height - 5; // Показываем над родителем
//         }
//
//         // Проверяем, выходит ли popover за верхнюю границу экрана
//         if (top < 0) {
//             top = 0; // Прижимаем к верхнему краю
//         }
//
//         // Применяем новые координаты
//         popover.style.top = `${top}px`;
//         popover.style.left = `${left}px`;
//     }
//
// // Вызывать при открытии popover и при скролле
//     window.addEventListener('scroll', updatePopoverPosition);
})


document.addEventListener('DOMContentLoaded', () => {
    // Обработчик для всех кнопок
    document.addEventListener('click', (event) => {
        const button = event.target.closest('[data-popover-id]');
        if (!button) return; // Если клик не по кнопке

        const popoverId = button.getAttribute('data-popover-id');
        const popover = document.getElementById(popoverId);
        if (!popover) return; // Если popover не найден

        // Позиционируем popover
        updatePopoverPosition(button, popover);

        // Открываем popover
        popover.togglePopover();
    });

    // Функция для позиционирования
    function updatePopoverPosition(button, popover) {
        const buttonRect = button.getBoundingClientRect();
        const popoverRect = popover.getBoundingClientRect();

        // Вычисляем начальные координаты
        let top = buttonRect.bottom + 5; // Позиция под кнопкой
        let left = buttonRect.left;

        // Проверяем, выходит ли popover за правую границу экрана
        if (left + popoverRect.width > window.innerWidth) {
            left = window.innerWidth - popoverRect.width; // Сдвигаем влево
        }

        // Проверяем, выходит ли popover за левую границу экрана
        if (left < 0) {
            left = 0; // Прижимаем к левому краю
        }

        // Проверяем, выходит ли popover за нижнюю границу экрана
        if (top + popoverRect.height > window.innerHeight) {
            top = buttonRect.top - popoverRect.height - 5; // Показываем над кнопкой
        }

        // Проверяем, выходит ли popover за верхнюю границу экрана
        if (top < 0) {
            top = 0; // Прижимаем к верхнему краю
        }

        // Применяем новые координаты
        popover.style.top = `${top}px`;
        popover.style.left = `${left}px`;
    }

    // Обновление при изменении размеров окна или скролле
    window.addEventListener('resize', () => {
        const openPopovers = document.querySelectorAll('[popover]:popover-open');
        openPopovers.forEach((popover) => {
            const button = document.querySelector(`[data-popover-id="${popover.id}"]`);
            if (button) updatePopoverPosition(button, popover);
        });
    });

    window.addEventListener('scroll', () => {
        const openPopovers = document.querySelectorAll('[popover]:popover-open');
        openPopovers.forEach((popover) => {
            const button = document.querySelector(`[data-popover-id="${popover.id}"]`);
            if (button) updatePopoverPosition(button, popover);
        });
    });
});