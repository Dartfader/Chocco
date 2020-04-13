
const slider=(function () {

    const left = document.querySelector("#left");
    const right = document.querySelector("#right");
    const items = document.querySelector('#items');
    const itemCount = document.querySelectorAll('.slider__item').length;

    let position = 0;


    function transform() {
        items.style.transform = `translateX(${-position * items.offsetWidth}px)`;//текстовая интерполяция
    }
    function rightClick(e) { //нажатие на правую стрелку
        e.preventDefault();
        position=== itemCount -1 ? position = 0 : position++; //тернарный оператор
        transform();
    }
    function leftClick(e) {
        e.preventDefault();
        position===0 ? position=itemCount - 1:position--;
        transform();
    }
    function addListeners() {
        left.addEventListener('click', leftClick);
        right.addEventListener('click', rightClick);
        window.addEventListener('resize', transform);
    }

    return {
        init:addListeners
            }
})();

slider.init();

