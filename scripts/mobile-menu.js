document.addEventListener('DOMContentLoaded', () => {

    // открытие мобильного меню
    const mobileMenu = document.getElementById('menu-mobile-box');
    const openBtnMobileMenu = document.getElementById('open-mobile-menu');
    const closeBtnMenu = document.getElementById('close-mobile-menu');
    const menuLinks = document.querySelectorAll('.menu-mobile-box__link');

    if (mobileMenu && openBtnMobileMenu && closeBtnMenu) {
        const openMenu = () => {
            mobileMenu.classList.add('menu-mobile-box-visible');
            closeBtnMenu.classList.add('header__menu-mobile-btn_close-visible');
            document.body.style.overflow = 'hidden';
        }

        const closeMenu = () => {
            mobileMenu.classList.remove('menu-mobile-box-visible');
            closeBtnMenu.classList.remove('header__menu-mobile-btn_close-visible');
            document.body.style.overflow = '';
        }

        openBtnMobileMenu.addEventListener('click', openMenu);
        closeBtnMenu.addEventListener('click', closeMenu);
        menuLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        })
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
})

// открытие popover
document.addEventListener('DOMContentLoaded', () => {
    // Обработчик для всех кнопок
    document.addEventListener('click', (event) => {
        const button = event.target.closest('[data-popover-id]');
        if (!button) return; // Если клик не по кнопке

        const popoverId = button.getAttribute('data-popover-id');
        const popover = document.getElementById(popoverId);
        if (!popover) return; // Если popover не найден

        // Временно показываем popover для расчёта размеров
        const wasOpen = popover.matches(':popover-open');
        if (!wasOpen) popover.showPopover();

        // Позиционируем popover
        updatePopoverPosition(button, popover);

        // Если popover был закрыт, скрываем его после расчёта
        if (!wasOpen) popover.hidePopover();

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