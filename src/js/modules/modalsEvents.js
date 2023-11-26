import {modalBody, modal} from "../core/elementsNodeList.js";
import Form from "./Form.js";
import {translateFields, lang} from "./base.js";
import {getElement, getElements} from "../core/index.js";
import {copyText} from "./helpers.js";


export default function modalsEvents(target) {
    if (target.dataset.target == 'donate') {

        modalBody.firstElementChild.classList.add('donate-modal');
        modalBody.firstElementChild.innerHTML = renderDonateModal(target);
        getElements('[data-copy] button').forEach((item) => {
            item.addEventListener('click', () => {
                copyText(item.previousElementSibling)
            })
        });
    }
    if (target.dataset.target == 'consultation') {
        modalBody.firstElementChild.innerHTML = renderConsultationModal(target);
        new Form('.form-modal').init();
    }
    if (target.dataset.form) {
        modalBody.firstElementChild.innerHTML = renderFormAnswer(target)
    }
}

function renderDonateModal(target) {
    const selected = target.dataset.services ? 'Послуга' : 'Лікар';


    return `<div class="content">
<div class="content__header">
<div class="h4 f-weight_500 border_bottom">Місія</div>
</div>
      <div class="f-size_s text-color_grey">BENEFICIARY</div>
      <div data-copy  class="text-uppercase f-size_l f-weight_400 mb_22"><span>National Bank of Ukraine</span><button class="icon-copy ml_18"></button></div>
      
           <div class="f-size_s text-color_grey">BENEFICIARY BIC</div>
      <div data-copy  class="text-uppercase f-size_l f-weight_400 mb_22"><span>NBUAUAUX</span><button class="icon-copy ml_18"></button></div>
      
             <div class="f-size_s text-color_grey">BENEFICIARY ADDRESS</div>
      <div data-copy  class=" f-size_l f-weight_400 mb_22"><span>9 Instytutska St, Kyiv, 01601, Ukraine</span><button class="icon-copy ml_18"></button></div>
    
             <div class="f-size_s text-color_grey">ACCOUNT NUMBER</div>
      <div  data-copy class="text-uppercase f-size_l f-weight_400 mb_22"><span>804790258</span><button class="icon-copy ml_18"></button></div>
    
             <div class="f-size_s text-color_grey">BENEFICIARY BANK NAME </div>
      <div data-copy  class=" f-size_l f-weight_400 mb_22"><span>JP MORGAN CHASE BANK, New York</span><button class="icon-copy ml_18"></button></div>
    
             <div class="f-size_s text-color_grey">BENEFICIARY BANK BIC</div>
      <div data-copy  class="text-uppercase f-size_l f-weight_400 mb_22"><span>CHASUS33</span><button class="icon-copy ml_18"></button></div>
    

      <div data-copy  class="text-uppercase f-size_l f-weight_400 mb_22"><span>ABA 0210 0002 1</span><button class="icon-copy ml_18"></button></div>
    
       <div class="f-size_s text-color_grey">BENEFICIARY BANK ADDRESS</div>
      <div  data-copy class=" f-size_l f-weight_400 mb_22"><span>383 Madison Avenue, New&nbsp;York, NY 10017, USA</span><button class="icon-copy ml_18"></button></div>
    
       <div class="f-size_s text-color_grey">PURPOSE OF PAYMENT</div>
      <div data-copy  class="text-uppercase f-size_l f-weight_400 mb_22"><span>for ac 47330992708</span><button class="icon-copy ml_18"></button></div>
    

    </div>`
}


function renderFormAnswer(target) {
    modal.classList.add('modal__form-answer');
    modalBody.className = 'form-answer modal__body text-center';
    const {formSuccessText, formErrorText, formSuccessTitle, formErrorTitle} = translateFields;
    let title, subtitle;
    if (target.dataset.form == 'success') {
        title = formSuccessTitle[lang];
        subtitle = formSuccessText[lang];
        modalBody.parentElement.classList.add('success');
    } else {
        title = formErrorTitle[lang];
        subtitle = formErrorText[lang];
    }
    return `

            <div class="modal__title">
                   <h2 class="text-uppercase">${title}</h2>
            </div>
<div class="modal__subtitle h3">
 ${subtitle}
</div> `
}


function renderConsultationModal(target) {
    return `<div class="row">
                    <div class="col-lg-8 pos-r mb_32-16">
                        <h3 class="mb_24 f-family_unbonded">
                         ${target.dataset.consultation}
                        </h3>
                        <div class="f-size_lg">Запишіться на консультацію і наш менеджер зв’яжеться з вами найближчим
                            часом
                        </div>
                          <div class="tooth-bg pos-a">
                            <svg class="icon">
                                <use xlink:href="#tooth-bg"></use>
                            </svg>
                        </div>
                    </div>
                    
                    <div class="col-12">
                        <form class="form form-modal form-consultation" data-form="${target.dataset.consultation}">
                            <div class="form__item ">
                                <label for="modal-name" class="f-size_sm mb_5">Ім’я</label>
                                <input type="text" id="modal-name" name="name" class="form__input f-weight_500">
                                <div class="form__message">
                                </div>
                            </div>
                            <div class="form__item ">
                                <label for="modal-phone" class="f-size_sm mb_5">Номер телефону</label>
                                <input type="text" id="modal-phone" name="phone" class="form__input f-weight_500">
                                <div class="form__message">
                                </div>
                            </div>
                           
                            <div class="form__btn">
                                <button class="btn btn_fill" type="submit">Записатися</button>
                            </div>
                        </form>
                    </div>
                </div>`
}

