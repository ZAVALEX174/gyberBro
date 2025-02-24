document.addEventListener('DOMContentLoaded', () => {


    var swiper = new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
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
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
    //
    // const btn = document.querySelector('.triger_active');
    // console.log(btn);
    // btn.addEventListener('click', e => document.querySelector('.none').classList.toggle('active'));


})