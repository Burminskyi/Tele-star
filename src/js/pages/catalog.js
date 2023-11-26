import {disableScrollAndSwipes, enableScrollAndSwipes, getElement, getElements} from "../core/index.js";

import dropdown from "../modules/dropdown.js";
import accordion from "../modules/accordion.js";
import {body} from "../core/elementsNodeList.js";
import initCheckBox from "../modules/checkbox.js";
import initRange from "../modules/rangeInput.js";


window.addEventListener("DOMContentLoaded", () => {
    try {
        //Init modules start
        dropdown();
        initRange();
        accordion('.filter-accordion', '.filter-accordion__header', '.filter-accordion__content')
        initCheckBox();
        //Init modules end

        const filter = getElement('.filter');
        const filterBtn = getElement('.filter-btn');
        const filterClose = getElement('.filter__close', filter);

        filterBtn.addEventListener('click', toggleFilter)
        filterClose.addEventListener('click', toggleFilter)


        //FUNCTIONS
        function toggleFilter() {
            const scrollPosition = filterBtn.dataset.position && filterBtn.dataset.position !== '0' ? filterBtn.dataset.position : scrollY || document.documentElement.scrollTop;
            if (filter.classList.contains('active')) {
                enableScrollAndSwipes(scrollPosition);
                filterBtn.dataset.position = '0';
                setTimeout(() => {
                    filter.classList.remove("active");
                    body.classList.remove('open-filter')
                }, 100)


            } else {
                filterBtn.dataset.position = scrollPosition;
                disableScrollAndSwipes(scrollPosition);
                filter.classList.add("active");
                body.classList.add('open-filter')
            }
        }
    } catch (e) {
        console.log(e);
    }
});



