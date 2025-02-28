document.addEventListener('DOMContentLoaded', () => {


    var swiper = new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        speed: 500,
        watchSlidesProgress: true,
        direction: "horizontal",
        grabCursor: true,
        scrollbar: {
            el: ".swiper-scrollbar",
            draggable: true,
        },

        breakpoints: {
            1024: {
                direction: "vertical",
            }
        }
    });

    var swiper2 = new Swiper(".mySwiper2", {
        loop: true,
        spaceBetween: 18,
        slidesPerView: 1.09,
        centeredSlides: false,
        speed: 500,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        breakpoints: {
            768: {
                centeredSlides: false,
                spaceBetween: 10,
                slidesPerView: 1,
            }
        }
    });
    //
    // const btn = document.querySelector('.triger_active');
    // console.log(btn);
    // btn.addEventListener('click', e => document.querySelector('.none').classList.toggle('active'));


})