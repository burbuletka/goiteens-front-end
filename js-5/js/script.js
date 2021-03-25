'use strict'

//1
let counter = 1;

while (counter < 10) {
    console.log('counter: ', counter);
    counter++;
}


//2
for (let i = 1; i < 10; i++) {
    const y = i % 2;
    if (y != 0) {
        console.log(`Число непарне - ${i}`);
    } else {
        console.log(`Число парне - ${i}`);
    }
}



//3
let num = 20;

while (num <= 28) {
    console.log('num: ', num);
    num++;
}


//4
let lenghter = '';

for (let name = 'Mary'; ;) {
    name = prompt("Введіть ім'я улюбленого героя");
    lenghter = Number(name.length);
    // let name = '';
    if (lenghter <= 6) {

        console.log(name);
    } else {
        console.log("Ім'я " + "перевищує ліміт");
        break
    }

}
