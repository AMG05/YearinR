import Swiper, { Navigation, FreeMode, A11y } from 'swiper';

const nodes = [].slice.call(document.querySelectorAll('.js-swiper'));
nodes.forEach(node => {
    new Swiper(node, {
        modules: [ Navigation, FreeMode, A11y ],
        freeMode: {
            enabled: true,
            sticky: true,
        },
        a11y: {
            enabled: true,
            slideLabelMessage: 'slide {{index}} of {{slidesLength}}'
        },
        slidesPerView: 1,
        spaceBetween: 12,
        navigation: {
            nextEl: node.previousElementSibling.querySelector('.swiper-next'),
            prevEl: node.previousElementSibling.querySelector('.swiper-previous'),
        },
        breakpoints: {
            600: { slidesPerView: 1 },
            960: { slidesPerView: 1 },
        }
    });
});