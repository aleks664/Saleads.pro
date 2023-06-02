const othersCarousel = (selector) => {
    const otherOffersCarousel = document.querySelectorAll(selector);
    otherOffersCarousel.forEach($carousel=> {
        const $prev = $carousel.querySelector('.js-prev'),
            $next = $carousel.querySelector('.js-next');
        const swiper = new Swiper($carousel.querySelector('.swiper'), {
            slidesPerView: 1,
            spaceBetween: 0,
            navigation: {
                nextEl: $next,
                prevEl: $prev,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.5,
                },
                425: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 4,
                },
                992: {
                    slidesPerView: 4,
                },
                1200: {
                    slidesPerView: 5,
                },
                1600: {
                    slidesPerView: 7,
                }
            }
        })
    });
}
document.addEventListener("DOMContentLoaded", () => {
    othersCarousel('.other-offers')
});