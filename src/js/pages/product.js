import accordion from "../modules/accordion.js";

import {disableScrollAndSwipes, enableScrollAndSwipes, getElement, getElements} from "../core/index.js";

import {removeActive} from "../core/classesEvents.js";
import {EffectFade, Navigation} from "swiper/modules";
import Swiper from "swiper";
import modalsEvents from "../modules/modalsEvents.js";
import Modal from "../modules/modal.js";


window.addEventListener("DOMContentLoaded", () => {
    try {
        if (!getElement('.product-page')) return
        const galleryParent = getElement('.product__gallery');
        const gallery = new Swiper('[data-swiper="gallery"]', {
            modules: [EffectFade],
            slidesPerView: 1,
            loop: true,
            effect: 'fade',
            spaceBetween: 0,
            allowTouchMove: false,
        });
        const galleryNavSlider = getElements('.gallery__nav .image', galleryParent);
        galleryNavSlider.forEach(item => {
            item.addEventListener('click', () => {
                removeActive(galleryNavSlider);
                getElement(`[data-gallery="${item.dataset.gallery}"]`, galleryParent).classList.add('active');
                item.classList.add('active');
                gallery.slideTo(+item.dataset.gallery);
            })
        });


        accordion('.item', '.item__header', '.item__content')
        if (getElement('[data-swiper="additional"]')) {
            new Swiper('[data-swiper="additional"]', {
                modules: [Navigation],


                spaceBetween: 18,


                navigation: {
                    nextEl: '[data-nav-additional="next"]',
                    prevEl: '[data-nav-additional="prev"]',
                },
                breakpoints: {
                    320: {
                        spaceBetween: 16,
                        slidesPerView: 1.15,

                    },
                    576: {

                        slidesPerView: 2,

                    },
                    993: {

                        slidesPerView: 3,
                    },
                    1600: {
                        slidesPerView: 4,

                    }


                },
            });
            if (getElements('[data-swiper="additional"] .swiper-slide').length <= 3 && screen.availWidth > 576) {
                getElement('.swiper-navigation').classList.add('hide')
            }
        }

        getElements('[data-target]').forEach(btn => {
            btn.addEventListener('click', () => {
                modalsEvents(btn);
                new Modal(".modal").openModal();
            })
        })


    } catch (e) {
        console.log(e);
    }
});