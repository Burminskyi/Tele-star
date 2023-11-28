// Увімкнути/вимкнути FLS (Full Logging System) (в роботі)
import burger from "./modules/burger.js";

window['FLS'] = true;
// Підключення основного файлу стилів
import "../scss/style.scss";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import PerfectScrollbar from 'perfect-scrollbar';

import * as flsFunctions from "./core/functions.js";
import {scrollToAnchor} from "./modules/scrollToAnchor.js";
import {headerFixed} from "./modules/index.js";
import {disableScrollAndSwipes, enableScrollAndSwipes, getElement, getElements} from "./core/index.js";
import {body, header} from "./core/elementsNodeList.js";
import modalsEvents from "./modules/modalsEvents.js";
import Modal from "./modules/modal.js";
import {instagramSlider} from "./modules/sliders.js";
import dropdown from "./modules/dropdown.js";

/* Перевірка підтримки webp, додавання класу webp або no-webp для HTML */
/* (i) необхідно для коректного відображення webp із css */
flsFunctions.isWebp();
/* Додавання класу touch для HTML якщо браузер мобільний */
flsFunctions.addTouchClass();
/* Додавання loaded для HTML після повного завантаження сторінки */
// flsFunctions.addLoadedClass();

/* Враховування плаваючої панелі на мобільних пристроях при 100vh */
flsFunctions.fullVHfix();


// Ліниве (відкладене) завантаження картинок
// Документація по роботі у шаблоні: https://template.fls.guru/template-docs/modul-lenivaya-podgruzka-lazy-loading.html
// Документація плагіна: https://github.com/verlok/vanilla-lazyload
// Сніппет(HTML):
// import './files/scroll/lazyload.js';

window.addEventListener("DOMContentLoaded", () => {
    try {
        const cartBtn = getElement('.cart-btn');
        const cartBtnDelete = getElement('[data-remove-todo]');
        const cart = getElement('#cart');
        const cartDELETE = getElement('#cart-empty');
        if (getElement('.cart-page') || getElement('.checkout-page')) {
            cartBtn.classList.add('hide')
            cartBtn.remove();
            getElement('#cart').remove();
        } else {
            const cartClose = getElements('[data-cart-close]');
            cartClose.forEach(itemClose => {
                itemClose.addEventListener('click', toggleFilter)

            })
            cartBtn.addEventListener('click', toggleFilter)

            const ps = new
            PerfectScrollbar('#scrollbar', {
                wheelSpeed: 2,
                wheelPropagation: true,
                minScrollbarLength: 20,
                suppressScrollX: true
            });
            ps.update();
        }
        if (cartBtnDelete) {
            cartBtnDelete.addEventListener('click', toggleFilterDelete)
            const cartCloseDelete = getElements('[data-cart-close]', cartDELETE);
            cartCloseDelete.forEach(itemClose => {
                itemClose.addEventListener('click', toggleFilterDelete)

            })
        }


        function toggleFilter() {
            const scrollPosition = cartBtn.dataset.position && cartBtn.dataset.position !== '0' ? cartBtn.dataset.position : scrollY || document.documentElement.scrollTop;
            if (cart.classList.contains('active')) {
                enableScrollAndSwipes(scrollPosition);
                cartBtn.dataset.position = '0';
                setTimeout(() => {
                    cart.classList.remove("active");
                    body.classList.remove('overlay')
                }, 100)


            } else {
                cartBtn.dataset.position = scrollPosition;
                disableScrollAndSwipes(scrollPosition);
                cart.classList.add("active");
                body.classList.add('overlay')
            }
        }

        function toggleFilterDelete() {
            const scrollPosition = cartBtnDelete.dataset.position && cartBtnDelete.dataset.position !== '0' ? cartBtnDelete.dataset.position : scrollY || document.documentElement.scrollTop;
            if (cartDELETE.classList.contains('active')) {
                enableScrollAndSwipes(scrollPosition);
                cartBtnDelete.dataset.position = '0';
                setTimeout(() => {
                    cartDELETE.classList.remove("active");
                    body.classList.remove('overlay')
                }, 100)


            } else {
                cartBtnDelete.dataset.position = scrollPosition;
                disableScrollAndSwipes(scrollPosition);
                cartDELETE.classList.add("active");
                body.classList.add('overlay')
            }
        }

        //FUNCTIONS


        scrollToAnchor();
        headerFixed();
        burger();
        instagramSlider();

    } catch (e) {
        console.log(e);
    }
});


