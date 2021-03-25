'use strict'

//1
let number = Number(prompt("Введіть число: "));
console.log(number);

if (number >= 55 && number <= 99) {
    console.log('Число потрапляє в діапазон');
} else {
    console.log('Число не потрапляє в діапазон');
}


// 2
let age = 55;

if (age >= 0 && age <= 16) {
    console.log('Макс. в групі 1');
}

else if (age >= 17 && age <= 60) {
    console.log('Макс. в групі 2');
}

else if (age >= 61 && age <= 100) {
    console.log('Макс. в групі 3');
}


//3
let userName = prompt("Введіть ім'я: ")
let userSurname = prompt("Введіть прізвище: ")

if (userName.length >= 4 && userSurname.length >= 5) {
    console.log(userName.length + userSurname.length);
    alert(userName.length + userSurname.length);
} else {
    console.log("УПС");
    alert("УПС");
}


//4
let random = Math.round(Math.random() * (5 - 1) + 1);
console.log(random);

if (random >= 1 && random <= 5) {
    console.log(random);
} else {
    console.log('число не потрапляє на проміжок від 1 - 5');
}


//5
let language = prompt('Введіть скорочено назву мови:  ua, en, ru, fr');

switch (language) {
    case 'ua':
        language = 'Січень';
        console.log(language);
        break;

    case 'en':
        language = 'January';
        console.log(language);
        break;

    case 'ru':
        language = 'январь';
        console.log(language);
        break;

    case 'fr':
        language = 'Janvier';
        console.log(language);
        break;

    default:
        console.log('Invalid language type');
}