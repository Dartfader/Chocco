//1 способ

// const openButton=document.querySelector('.burger__button');
// const openNav=document.querySelector('.overlay__nav');
// openButton.addEventListener('click', function () {
//     openNav.style.visibility='visible';
// });
// const closeButton=document.querySelector('.nav__close');
// closeButton.addEventListener('click', function() {
//     openNav.style.visibility='hidden';
//
// });



//2 способ

let menuOpenBurger = (function(options) {
    let button=document.querySelector(options.button);
    let menu=document.querySelector(options.menu);
    let body=document.querySelector('body');
    let close=document.querySelector(options.close);

    let _toggleMenu = function(e) {
        button.classList.toggle('burger__button--open');
        menu.classList.toggle('overlay__nav--open');
        body.classList.toggle('body-menu-active');
        close.classList.toggle('nav__close--active');

    };

    let addListeners = function () {
        button.addEventListener('click', _toggleMenu);
        close.addEventListener('click', _toggleMenu);

    };


    return {
        openMenu:addListeners,
    };

}) ({
    button:'#toggle',
    menu:'#overlay',
    close:'#nav__close'
});

menuOpenBurger.openMenu();

