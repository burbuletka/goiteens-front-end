'use strict'


// Зав. 1
console.log('Завдання 1');

function hello1 (js) {
  return "Привіт, " +  js;
}
console.log(hello1("JavaScript"));

console.log('.......................');


// Зав. 2
console.log('2');
function hello2 (name) {
  name = 'Василь';
  return 'Привіт, ' + name;
};

console.log(hello2());

console.log('.......................');


// Зав. 3
console.log('3');
function mul (n, m) {
  let Array = [n*m, m+n, m-n];
  return Array;
}

console.log(mul(4,6));

console.log('.......................');


// Завд. 4
console.log(' 4');
const myNewArrowFunction = (...args) => console.log(args);

myNewArrowFunction(1, 2, 3);
myNewArrowFunction(100, 200, 300, 400, 500);
myNewArrowFunction("Js", "Python", "Java", "PHP", "C++");

console.log('----------------------------------------------------------------');


// Зав. 5
console.log('5');

  let total;
  let tMark = 0;
  let lMark;
const myAverageScore = function(...marks){
  
  
  for(total of marks){

  }
  for (let i = 0; i < total.length; i++){
    tMark += total[i];
    console.log(total[i]);
  };
  
  
  console.log(tMark);

  lastMark = Math.round(tMark / total.length);


  if(lMark <= 100 && ltMark >= 91){
    console.log('Myaveragescore: A');
  }else if (lMark <= 90 && lMark >= 81){
    console.log('Myaveragescore: B');
  }else if (lMark <= 80 && lMark >= 71){
    console.log('Myaveragescore: C');
  }else if (lMark <= 70){
    console.log('Myaveragescore: D');
  }

  totalMark  = 0
};

console.log('Перевірка 1');
myAverageScore([100, 75, 81, 96]);
console.log('Перевірка 2');
myAverageScore([45, 63, 85, 70]);
console.log('Перевірка 3');
myAverageScore([77, 82, 60, 58]);
console.log('Перевірка 4');
myAverageScore([93, 99, 93, 96]);