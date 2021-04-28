'use strict'

//1
console.log('Зав. 1');
let Arr1 = [1, 5, '4', 'hello'];
let Arr2 = [true, 2, {}, ['a'], 222];

console.log(Arr1[1] + Arr2[1]);

console.log('.......................');


//2
console.log('Зав. 2');
Arr1[4] = 22;

console.log(Arr1);

console.log('.......................');


// 3
console.log('Зав. 3');
for (let Arr of Arr2) {
  console.log(Arr);
}

console.log('.......................');


//4
console.log('Зав. 4');
const message = 'Welcome to Ukraine!';
let leters = message.split('');
let string = leters.join('');
console.log(string);
console.log(leters.indexOf('l'));

console.log('.......................');


//5
console.log('Зав.5');
let music = [ 'Джаз', 'Блюз'];

music.push('Рок-н-ролл');
console.log(music);

music.splice(1, 1, 'Класика',);
console.log(music);

let shift = music.shift();
console.log(shift);

music.unshift('Реn', 'Реrrі');
console.log(music);

console.log('.......................')