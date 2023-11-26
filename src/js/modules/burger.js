import {header} from "../core/elementsNodeList.js";
import {disableScrollAndSwipes, enableScrollAndSwipes} from "../core/index.js";

const burger = () => {
    if (header) {
        const burger = header.querySelector(".burger");
        burger.addEventListener("click", () => {

            const scrollPosition = burger.dataset.position && burger.dataset.position !== '0' ? burger.dataset.position : scrollY || document.documentElement.scrollTop;


            if (burger.classList.contains('active')) {
                enableScrollAndSwipes(scrollPosition);
                burger.dataset.position = '0';
                setTimeout(() => {
                    burger.classList.remove("active");
                    header.classList.remove("active");
                }, 100)


            } else {
                burger.dataset.position = scrollPosition;
                disableScrollAndSwipes(scrollPosition);
                burger.classList.add("active");
                header.classList.add("active");
            }




        });
    }
};
export default burger;
