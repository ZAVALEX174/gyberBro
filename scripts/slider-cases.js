document.addEventListener('DOMContentLoaded', () => {


    var swiper = new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        speed: 500,
        watchSlidesProgress: true,
        direction: "vertical",
        grabCursor: true,
        scrollbar: {
            el: ".swiper-scrollbar",
            draggable: true,
        },
    });

    var swiper2 = new Swiper(".mySwiper2", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 1,
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
    });
    //
    // const btn = document.querySelector('.triger_active');
    // console.log(btn);
    // btn.addEventListener('click', e => document.querySelector('.none').classList.toggle('active'));


})