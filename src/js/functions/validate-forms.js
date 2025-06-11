import JustValidate from 'just-validate';
import Inputmask from "inputmask";

export const validateForms = (selector, rules, afterSend) => {
    const validation = new JustValidate(selector, {
      focusInvalidField: false,
      lockForm: false,
      testingMode: false,
      validateBeforeSubmitting: true,
      submitFormAutomatically: false
    });
  
    for (let item of rules) {
      validation.addField(item.ruleSelector, item.rules);
    }
   
    validation.onValidate(ev => {
      if (ev.isValid) {
        document.querySelector(`${selector} .btn`).removeAttribute('disabled');
      } else {
        document.querySelector(`${selector} .btn`).setAttribute('disabled', 'disabled');
      }
    })

    validation.onSuccess(ev => {
      
      // let formData = new FormData(ev.target);
      // let xhr = new XMLHttpRequest();
      const modals = document.querySelectorAll('.modal');
      if (modals.length > 0){
        modals.forEach(modal => {
          if (modal.classList.contains('is-open')){
            MicroModal.close();
          }
        })
      }
     
      // MicroModal.show('thanks-modal', {
      //   disableScroll: true,
      // });
      // xhr.onreadystatechange = function () {
      //   if (xhr.readyState === 4) {
      //     if (xhr.status === 200) {
      //       if (afterSend) {
      //         // afterSend();
      //       }
      //       console.log('Отправлено');
      //     }
      //   }
      // };
      // ev.target.reset();
    });
    // console.log(MicroModal)

};
