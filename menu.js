const menuList=document.querySelector('.menu__list');
const menuItem=document.querySelectorAll('.menu__item');
const menuLink=document.querySelectorAll('.menu__link');
const close=document.querySelector('.close__icon');

 menuList.addEventListener('click', function(e)  {
     let target = e.target;

     console.log(target);
     //console.log('нажатие на target'+ target);
     let currentItem=target.closest(".menu__item");//делегирование
     e.preventDefault();
     if (target.classList.contains("menu__item__title__text")||target.classList.contains("menu__link")||target.classList.contains("menu__item__close")||target.classList.contains("close__icon")) {
           // перечислил много условий из за проблем с нажатием на иконку закрыть
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

