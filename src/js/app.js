// Увімкнути/вимкнути FLS (Full Logging System) (в роботі)
import burger from "./modules/burger.js";

window['FLS'] = true;
// Підключення основного файлу стилів
import "../scss/style.scss";
import 'swiper/css';


import * as flsFunctions from "./core/functions.js";
import {scrollToAnchor} from "./modules/scrollToAnchor.js";
import {headerFixed} from "./modules/index.js";
import {getElement, getElements} from "./core/index.js";
import {header} from "./core/elementsNodeList.js";
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
        scrollToAnchor();
        headerFixed();
        burger();
        instagramSlider();

    } catch (e) {
        console.log(e);
    }
});


