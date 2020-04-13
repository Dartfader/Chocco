const myForm=document.querySelector('.order__form');
const validateButton=document.querySelector('.order__button');
const modal = document.querySelector('.modal');
const modalMessage = modal.querySelector('.modal__message');
const modalButton = modal.querySelector('.modal__button');

//отпарвка запроса

let ajaxForm = function(form) {//функция отправки запроса
    let formData = new FormData() ;

        formData.append("name", myForm.elements.name.value );
        formData.append("phone", myForm.elements.phone.value );
        formData.append("comment", myForm.elements.comment.value);

    // let data = {
    //     name:myForm.elements.firstname.value,
    //     phone:myForm.elements.phone.value,
    //     comment:myForm.elements.comment.value,
    //     to:"vld@mail.com",
    // };
   let url="https://webdev-api.loftschool.com/sendmail/fail";
   let urlSuccess='https://webdev-api.loftschool.com/sendmail';
    const xhr=new XMLHttpRequest();
    xhr.responseType="json";
    xhr.open("POST", urlSuccess);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xhr.send(formData);
    return xhr;

};

validateButton.addEventListener('click', (e)=> {
    e.preventDefault();
    let form=e.target;
    console.log(form);
    let request=ajaxForm(form);
    console.log("status"+ ' '+ request.status);
    if(request.status>=400) {
        modalMessage.textContent = 'Произошла ошибка';
        modal.classList.add('modal--active');
    }
    else {
        modalMessage.textContent = 'Сообщение было успешно отправлено';
        modal.classList.add('modal--active');
    }
    modalButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        modal.classList.remove('modal--active');
    })
});