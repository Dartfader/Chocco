const myForm=document.querySelector('.order__form');
const validateButton=document.querySelector('.order__button');
const modal = document.querySelector('.modal');
const modalMessage = modal.querySelector('.modal__message');
const modalButton = modal.querySelector('.modal__button');


//отправка запроса

let ajaxForm = function(form) {//функция отправки запроса
    let formData = new FormData() ;

        formData.append("name", form.elements.name.value );
        formData.append("phone", form.elements.phone.value );
        formData.append("comment", form.elements.comment.value);
        formData.append("to", "matrenin1995@mail.ru");
    // let data = {
    //     name:myForm.elements.name.value,
    //     phone:myForm.elements.phone.value,
    //     comment:myForm.elements.comment.value,
    //     to:"vld@mail.com",
    // };
   let url="https://webdev-api.loftschool.com/sendmail/fail";
   let urlSuccess='https://webdev-api.loftschool.com/sendmail';
    const xhr=new XMLHttpRequest();
    xhr.responseType="json";
    xhr.open("POST", url);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xhr.send(formData);
    // console.log(formData);
    return xhr;

};

myForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    let currentForm=e.target;
// console.log(currentForm);
    let request=ajaxForm(currentForm);
    console.log(request.status);
    console.log(request);
    if(request.status===0) {
        modalMessage.textContent = 'Произошла ошибка';
        modal.classList.add('modal--active');
        console.log(modal);
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