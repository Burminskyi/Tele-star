import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import {getElement, getElements} from "../core/index.js";
import {instagramSlider} from "../modules/sliders.js";
import {header} from "../core/elementsNodeList.js";


window.addEventListener("DOMContentLoaded", () => {
    try {
        if (getElement('.main-page')) header.classList.remove('header-black')
        new Swiper('[data-swiper="new"]', {
            modules: [Navigation],


            spaceBetween: 20,


            navigation: {
                nextEl: '[data-nav-new="next"]',
                prevEl: '[data-nav-new="prev"]',
            },
            breakpoints: {
                320: {

                    slidesPerView: 1,

                },
                576: {

                    slidesPerView: 2,

                },
                993: {

                    slidesPerView: 3,
                },
                1600: {
                    slidesPerView: 4,
                },

            },
        });

    } catch (e) {
        console.log(e);
    }
});