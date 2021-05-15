'use strich'

console.log('Зав. 1');
// Зав. 1

const user = {
  userName: 'Margarita',
  age: 13,
  showUserName(){
    console.log(this.userName);
  },
  updateAge(){
    this.age++
    console.log(this.age);
  }
  
}
user.showUserName();
user.updateAge();
user.updateAge();
user.updateAge();
user.updateAge();
user.updateAge();

console.log("---------------------");




console.log('Зав. 2');
//Зав. 2

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
  }


let keys = Object.values(salaries);
console.log(keys);

let sum = 0;

for (let i = 0; i < keys.length; i++) {
  sum+=keys[i];
}
console.log(`Загальна сума: ${sum}`);

console.log('---------------------------------------------');



console.log('Зав. 3');
//Зав. 3

const calculator = {
  read(a, b){
    a = +prompt('Введіть перше число: ');
    b = +prompt('Введіть друге число: ');
    calculator.Num1 = a;
    calculator.Num2 = b;
    console.log(this.Num1);
    console.log(this.Num2);
  },
  
  sum(){
    console.log('Сума чисел:', calculator.Num2 + calculator.Num1);
  },

  mult(){
    console.log('Добуток чисел:', calculator.Num2 * calculator.Num1);
  }
}

calculator.read()
calculator.sum();
calculator.mult();

console.log('--------------------');



console.log("Зав. 4");
//Зав. 4


  const cafe= {
    name: 'Republic',
    width:200,
    height: 300,
    personal:5,
    hr: true 
  };
  

  const entries = Object.entries(cafe);
  
 
  for (const entry of entries) {
    const key = entry[0];
    const value = entry[1];
  
    console.log(`${key} - ${value}`);
  }

  let S = cafe.width * cafe.height;
  console.log(`Площа будівлі: ${S}`);