const avatarClick = document.querySelectorAll(".avatar__item");
const items = document.querySelectorAll(".feedback__item");
let active=0;

for (let i = 0;i<items.length;i++) {

    avatarClick[i].addEventListener('click',function(e)  {
        e.preventDefault();
        console.log(e);

        items[i].classList.toggle('feedback__item--active');
        avatarClick[i].classList.toggle('avatar__item--active');

        avatarClick[active].classList.toggle('avatar__item--active');
        items[active].classList.toggle('feedback__item--active');
        active=i;
        console.log(active);
});
}


