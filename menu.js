const menuList=document.querySelector('.menu__list');
const menuItem=document.querySelectorAll('.menu__item');

 menuList.addEventListener('click', function(e)  {
     let target = e.target;
     let currentItem=target.closest(".menu__item");//делегирование
     e.preventDefault();
     if (target.classList.contains("menu__link")) {
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
