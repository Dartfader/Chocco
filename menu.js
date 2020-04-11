const menuList=document.querySelector('.menu__list');
const menuItem=document.querySelectorAll('.menu__item');
const menuLink=document.querySelectorAll('.menu__link');
const close=document.querySelector('.menu__item__close');

 menuList.addEventListener('click', function(e)  {
     let target = e.target;
     console.log('нажатие на target'+ target);
     let currentItem=target.closest(".menu__item");//делегирование
     e.preventDefault();
     if (target.classList.contains("menu__item__title__text")||target.classList.contains("menu__link")) {
            console.log(currentItem);
         e.preventDefault();
         if (!currentItem.classList.contains("menu__active")) {
             for(let i=0;i<menuItem.length;i++) {
                 menuItem[i].classList.remove("menu__active")
                 // console.log(item);
             }
             currentItem.classList.add("menu__active");
         }

         else {
             currentItem.classList.remove("menu__active");
         }
     }

 });

 menuLink.onclick= function (e) {
     console.log(menuLink);
 };

 close.addEventListener('click',function (e) {
        let closeTarget=e.target;
        let currentClose=closeTarget.closest("menu__item__close");
        if(closeTarget.classList.contains("menu__item__close")) {

        }

 })
