import emailjs from '@emailjs/browser';

export function email(form){
    emailjs.sendForm('service_3hpjrrx', 'template_bdwo784', form.current, '_pFx-KlQNBIBqXELi')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
} 

