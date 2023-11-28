import {disableScrollAndSwipes, enableScrollAndSwipes, getElement, getElements} from "../core/index.js";

import dropdown from "../modules/dropdown.js";
import accordion from "../modules/accordion.js";
import {body} from "../core/elementsNodeList.js";
import initCheckBox from "../modules/checkbox.js";
import initRange from "../modules/rangeInput.js";
import PerfectScrollbar from "perfect-scrollbar";


window.addEventListener("DOMContentLoaded", () => {
    try {
        //TOdo remove if
        if (!getElement('.checkout-page')) return


        //Init modules start
        dropdown();

        initRange();
        if (screen.availWidth <= 992) {
            accordion('.checkout-accordion', '.checkout-accordion__header', '.checkout-accordion__content')
        }
        window.addEventListener('resize', () => {
            if (screen.availWidth <= 992) {
                accordion('.checkout-accordion', '.checkout-accordion__header', '.checkout-accordion__content')
            }
        })
        initCheckBox();
        //Init modules end

    } catch (e) {
        console.log(e);
    }
});



