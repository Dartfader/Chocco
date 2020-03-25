// var name="Vlad"
// console.log(name);
// name="Oleg"
// console.log(name);

// var n=2
// if (n>10) {
//     console.log(n);
// }
// else {
//     console.log("ошибка")
// }

// for (let i=0;i<10;i++) {
//     console.log(i);
// }


//
// function sum(p1, p2, p3) {
//     var result=p1+p2+p3;
//
//     return result;
// }
//
// var h=sum(10, 20, 30);
// console.log(h);
//
// var s=sum(1,2,3);
// console.log(s);
//
// for (let i=0;i<5;i++) {
//     console.log(i);
// }

//массивы

// var mass= ['Привет', 'Sergey'] ;
// mass.push('я изучаю','javascript');
// console.log(mass.length);
//
// for(let i=0;i<mass.length;i++) {
//     console.log(mass[i]);
// }

// var massive=[1,20,50,30,700,600,90,80,4];
// for (let i=0;i<massive.length;i++) {
//     if (massive[i]>100) {
//         console.log(massive[i]);
//     }
// }

var f = {
    name:'Vlad',
    lastName:'Matrenin',
    age:24
};

f.location='Ulyanovsk';
for (let key in f) {
    console.log(f[key]);
}


function hello(human) {

    var result= 'Привет, меня зовут'+' '+human.name +' и мне'+' '+human.age+' лет!';
     return result;
};

let result=hello(f);
console.log(result);

