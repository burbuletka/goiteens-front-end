'use strict'
//1
const k1 = '5px';
const k2 = '12djd334';
const k3 = '12.45asdwe12';
const k4 = 'qwqweeewq';

console.log(parseInt(k1));
console.log(parseInt(k2));
console.log(parseInt(k3));
console.log(parseInt(k4));

//2
console.log(parseFloat(k1));
console.log(parseFloat(k2));
console.log(parseFloat(k3));
console.log(parseFloat(k4));


//3
console.log(Math.min(2, 34, 99, 3, 22, 36, 733, 18))
console.log(Math.max(2, 34, 99, 3, 22, 36, 733, 18))


//4
console.log(Math.round(Math.random() * (19 - 3) + 3));


//5
let result = 5 + 5 + '5';
console.log("5+5+'5'=", result);
console.log("typeof 5+5+'5':", typeof result);


//6
let email = 'burbuletka5@gmail.com';
console.log('Чи є в змінній email такий символ як @?', 'Відповідь:', email.includes('@'));
console.log('В змінній email', email.length, 'символи');


// завдання 7

let My = 'My ';
let nam = 'name ';
let is = 'is ';
let fullName = My + nam + is + 'Victor';
console.log(fullName)


// завдання 8

const userName = 'Cole';
let payment = 300;
alert('Дякуємо, ' + userName + '! До сплати ' + payment + ' гривень');

console.log('Дякуємо, ' + userName + '! До сплати ' + payment + ' гривень');