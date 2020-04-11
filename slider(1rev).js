

const left = document.querySelector("#left");
const right = document.querySelector("#right");
const items = document.querySelector("#items");

const calcLeft=getComputedStyle(items);

right.addEventListener("click", function(e) {
    e.preventDefault();
    let rightPos= parseInt(calcLeft.right);
    if (rightPos<1000) {
        items.style.right = rightPos + 786 + 'px';
    }
    console.log(right);
    // напишите здесь код, который сдвигает items на 100px вправо
    // если items уже сдвинут на 5 элементов впарво, то больше элементы сдвигать не надо, т.к. вы достигли конца списка
});

left.addEventListener("click", function(e) {
    e.preventDefault();
    let rightPos=parseInt(calcLeft.right);
    if (rightPos>0) {
        items.style.right= rightPos-786+'px';
        console.log(left);
    }
    // напишите здесь код, который сдвигает items на 100px влево
    // если item находится в самом начале, то больше элементы сдвигать влево не надо, т.к. вы достигли начала списка
});

