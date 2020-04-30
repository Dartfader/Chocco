const content =document.querySelector('.member__hidden');
const teamList=document.querySelector('.team__list');
const open=document.querySelector('.team__name');//нажатие расскрывает контент
const item=document.querySelectorAll('.team__item');

 teamList.addEventListener('click', function(e)  {
     let target = e.target;
     let currentItem=target.closest(".team__item");
     e.preventDefault();
     if (target.classList.contains("team__name")) {
         console.log(currentItem);
         if (!currentItem.classList.contains("is-active")) {
             for(let i=0;i<item.length;i++) {
                 item[i].classList.remove("is-active")
                 // console.log(item);

             }
             currentItem.classList.add("is-active");
         }

         else {
             currentItem.classList.remove("is-active");
         }
     }

 });
