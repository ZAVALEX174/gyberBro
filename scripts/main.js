function updateVideoSources() {
    const isMobile = window.innerWidth <= 768;

    const videos = document.querySelectorAll('.video-background');

    videos.forEach(video => {
        const sources = video.querySelectorAll('source');
        sources.forEach(source => {
            if (!source.dataset.srcDesktop || !source.dataset.srcMobile) return;

            const src = isMobile ?
                source.dataset.srcMobile :
                source.dataset.srcDesktop;

            if (source.src !== src) {
                source.src = src;
                video.load();
            }
        });
    });
}

// Инициализация
window.addEventListener('load', updateVideoSources);
window.addEventListener('resize', updateVideoSources);

// запуск видео
document.addEventListener('DOMContentLoaded', () => {
    const firstVideo = document.getElementById('first-video');
    const secondVideo = document.getElementById('second-video');
    const hackButton = document.getElementById('hack-button');
    const landingContent = document.getElementById('landing-content');
    const videoContent = document.getElementById('video-container');

    // Проверяем, была ли анимация уже воспроизведена
    if (localStorage.getItem('animationPlayed')) {
        // Если анимация уже воспроизведена, сразу показываем лендинг
        firstVideo.style.display = 'none';
        secondVideo.style.display = 'none';
        videoContent.style.display = 'none';
        landingContent.style.display = 'block';
        landingContent.classList.add('show'); // Плавное появление
        return; // Прерываем выполнение
    }

    firstVideo.addEventListener('play', () => {
        setTimeout(() => {
            setTimeout(() => {
                hackButton.classList.add('hack-button-visible'); // Плавное появление
            }, 50);
        }, 5000);
    });

    // Обработчик нажатия на кнопку
    hackButton.addEventListener('click', () => {
        // Скрываем кнопку
        hackButton.style.display = 'none';
        firstVideo.style.display = 'none';
        // Запускаем второе видео
        secondVideo.play();
        secondVideo.style.opacity = '1'; // Показываем второе видео

        // Плавное изменение прозрачности второго видео
        setTimeout(() => {
            secondVideo.style.opacity = '0'; // Плавно скрываем второе видео
        }, 6000); // 6 секунд

        // После завершения второго видео и задержки показываем лендинг
        setTimeout(() => {
            // Скрываем видео
            secondVideo.style.display = 'none';
            videoContent.style.display = 'none';

            // Показываем контент лендинга
            landingContent.style.display = 'block';
            landingContent.classList.add('show'); // Плавное появление

            // Сохраняем состояние в localStorage
            localStorage.setItem('animationPlayed', 'true');
        }, 6500); // 6 секунд + 3 секунды задержки
    });
});

document.addEventListener('DOMContentLoaded', () => {

    // открытие мобильного меню
    const mobileMenu = document.getElementById('menu-mobile-box');
    const openBtnMobileMenu = document.getElementById('open-mobile-menu');
    const closeBtnMenu = document.getElementById('close-mobile-menu');
    const menuLinks = document.querySelectorAll('.menu-mobile-box__link');
    const header = document.querySelector('.header');

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

    // cookies-box
    const cookiesBox = document.querySelector('.cookies-box');
    const cookiesBoxBtn = document.querySelector('.cookies-content__btn');
    cookiesBoxBtn.addEventListener('click', e => {
        e.preventDefault();
        cookiesBox.style.display = 'none';
    })


    // открытие поповеров
    const modulsBtn = document.querySelectorAll('.card-item__down-body-item-top-hint-box');
    const closePopoverBtns = document.querySelectorAll('.modal-hints-close');
    const pops = document.querySelectorAll('.modal-hints');

    modulsBtn.forEach(modulBtn => {
        modulBtn.addEventListener('click', e => {
            let offsetX = e.clientX;
            let offsetY = e.clientY;

            // 1. Проблема с определением целевого элемента
            const target = e.target.closest('.card-item__down-body-item-top-hint-box, .open-popover');
            if (!target) return;

            // 2. Проблема с поиском родителя
            const parentCardItem = target.closest('.card-item__down-body-item');
            if (!parentCardItem) return;

            // 3. Проблема с поиском попапа
            const currentPopover = parentCardItem.querySelector('.modal-hints');
            if (!currentPopover) return;

            // Закрываем все попапы
            pops.forEach(pop => pop.classList.remove('modal-vis'));

            // Открываем текущий попап
            currentPopover.classList.add('modal-vis');

            // Размеры текущего поповера
            const rectPopover = currentPopover.getBoundingClientRect();

            // размеры окна браузера
            let winWidth = window.innerWidth;
            let winWidthPopolfm = winWidth / 2;

            // Получаем границы секции cards
            const cardsSection = document.querySelector('.card-box');
            const cardsRect = cardsSection.getBoundingClientRect();

            if (winWidth < 1921) {
                if (offsetX < 503) {
                    console.log(offsetX, 'offsetX меньше 503рх');
                    currentPopover.style.left = `0`;
                    currentPopover.style.right = `auto`;
                } else if (offsetX > 503) {
                    console.log(offsetX, 'offsetX больше 503рх');
                    currentPopover.style.left = `auto`;
                    currentPopover.style.right = `0`;
                }
            } else if (winWidth > 1921) {
                if (offsetX > winWidthPopolfm) {
                    currentPopover.style.left = `auto`;
                    currentPopover.style.right = `0`;
                }
            }
        });
    });

    closePopoverBtns.forEach(btn => {
        btn.addEventListener('click', e => {
            // Закрываем родительский попап
            const popover = e.target.closest('.modal-hints');
            if (popover) popover.classList.remove('modal-vis');
        });
    });

    document.querySelector('#cards-lvl').addEventListener('click', (e) => {
        const popover = document.querySelector('.modal-hints.modal-vis'); // Текущий открытый попап
        const isClickInsidePopover = popover?.contains(e.target);
        const isClickOnButton = e.target.closest('.card-item__down-body-item-top-hint-box');

        // Закрываем попап если:
        // 1. Есть открытый попап
        // 2. Клик не внутри попапа
        // 3. Клик не по кнопке открытия
        if (popover && !isClickInsidePopover && !isClickOnButton) {
            popover.classList.remove('modal-vis');
        }
    });
})

// открытие popover
// document.addEventListener('DOMContentLoaded', () => {
//     // Обработчик для всех кнопок
//     document.addEventListener('click', (event) => {
//         const button = event.target.closest('[data-popover-id]');
//         if (!button) return; // Если клик не по кнопке
//
//         const popoverId = button.getAttribute('data-popover-id');
//         const popover = document.getElementById(popoverId);
//         if (!popover) return; // Если popover не найден
//
//         // Временно показываем popover для расчёта размеров
//         const wasOpen = popover.matches(':popover-open');
//         if (!wasOpen) popover.showPopover();
//
//         // Позиционируем popover
//         updatePopoverPosition(button, popover);
//
//         // Если popover был закрыт, скрываем его после расчёта
//         if (!wasOpen) popover.hidePopover();
//
//         // Открываем popover
//         popover.togglePopover();
//     });
//
//     // Функция для позиционирования
//     function updatePopoverPosition(button, popover) {
//         const buttonRect = button.getBoundingClientRect();
//         const popoverRect = popover.getBoundingClientRect();
//
//         // Вычисляем начальные координаты
//         let top = buttonRect.bottom + 5; // Позиция под кнопкой
//         let left = buttonRect.left;
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
//             top = buttonRect.top - popoverRect.height - 5; // Показываем над кнопкой
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
//     // Обновление при изменении размеров окна или скролле
//     window.addEventListener('resize', () => {
//         const openPopovers = document.querySelectorAll('[popover]:popover-open');
//         openPopovers.forEach((popover) => {
//             const button = document.querySelector(`[data-popover-id="${popover.id}"]`);
//             if (button) updatePopoverPosition(button, popover);
//         });
//     });
//
//     window.addEventListener('scroll', () => {
//         const openPopovers = document.querySelectorAll('[popover]:popover-open');
//         openPopovers.forEach((popover) => {
//             const button = document.querySelector(`[data-popover-id="${popover.id}"]`);
//             if (button) updatePopoverPosition(button, popover);
//         });
//     });
// });

