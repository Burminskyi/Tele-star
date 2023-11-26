import Swiper from "swiper";
import {Navigation} from "swiper/modules";
import {getElement, getElements} from "../core/index.js";

function instagramSlider() {
    if (getElement('[data-swiper="instagram"]')) {
        new Swiper('[data-swiper="instagram"]', {
            modules: [Navigation],


            spaceBetween: 18,


            navigation: {
                nextEl: '[data-nav-instagram="next"]',
                prevEl: '[data-nav-instagram="prev"]',
            },
            breakpoints: {
                320: {
                    spaceBetween: 16,
                    slidesPerView: 1.5,

                },
                576: {

                    slidesPerView: 3,

                },
                // 993: {
                //
                //     slidesPerView: 3,
                // },
                1600: {
                    slidesPerView: 4,

                }


            },
        });
        console.log(getElements('[data-swiper="instagram"] .swiper-slide').length, screen.availWidth)
        if (getElements('[data-swiper="instagram"] .swiper-slide').length <= 3 && screen.availWidth > 576) {
            getElement('[data-swiper="instagram"] .swiper-navigation').classList.add('hide')
        }
    }

}

export {
    instagramSlider
}