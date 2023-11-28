import {disableScrollAndSwipes, enableScrollAndSwipes, getElement, getElements} from "../core/index.js";

import dropdown from "../modules/dropdown.js";
import accordion from "../modules/accordion.js";
import {body} from "../core/elementsNodeList.js";
import initCheckBox from "../modules/checkbox.js";
import initRange from "../modules/rangeInput.js";
import PerfectScrollbar from "perfect-scrollbar";
import Swiper from "swiper";
import {removeActive} from "../core/classesEvents.js";


window.addEventListener("DOMContentLoaded", () => {
    try {
        //TOdo remove if
        if (!getElement('.text-page')) return

        const textSwiper = new Swiper('[data-swiper="text"]', {
            slidesPerView: 1,
            draggable: false,
            spaceBetween: 0,
            allowTouchMove: false,
        });
        const textNavSlider = getElements('.text-page__nav .item');
        textNavSlider.forEach(item => {
            item.addEventListener('click', () => {
                removeActive(textNavSlider);
                item.classList.add('active');
                // getElement(`[data-gallery="${item.dataset.gallery}"]`, galleryParent).classList.add('active');
                // item.classList.add('active');
                textSwiper.slideTo(+item.dataset.slide);
            })
        });

    } catch (e) {
        console.log(e);
    }
});



