let a = 0;
console.log(a);

let obj = {
  number: 5,
  sayNumber: function () {
      function say() {
        console.log(this);  // this будет ссилаться на window 
      }
      say();
  }
}

let obj1 = {
  number: 5,
  sayNumber: function () {
      say = () => {
        console.log(this);  // this будет ссилаться на обект  {number: 5, sayNumber: ƒ}
    }
    say();
  }
}

obj1.sayNumber();

let names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

let shortNames = names.filter((name) => {
  return name.length < 5;
});

console.log(shortNames);

let answers = ['IvAn', 'AnnA', 'HeLLo'];

answers = answers.map((item) => item.toLowerCase());

console.log(answers);

//console.log(`Пользователь ${name}, ${age} лет`);

function fetchData(data, count = 0) {
  //count = count || 0; // раньше использовали не официалньную проверку
  console.log(`Даннье : ${data} в количестве ${count}`);
}

fetchData('something');

function max (a, b, ...numbers) {  // Rest оператор
  console.log(numbers);
}

max(3, 4 , 67, 97);

const arr1 = [1, 2, 5],
      arr2 = [43, 2, 6];

const res = Math.max(...arr1, ...arr2);  
console.log(res);  // max Значения 43

// обединения в один массив 

const user = {
  name: 'default',
  pass: 'qwerty',
  rights: 'user'
};

const admin = {
  name: 'admin',
  pass: 'root'
}

// const res1 = Object.assign(user, admin); // Обединить и переписать дание в массиве
// console.log(res1);
//const res2 = Object.assign({}, user, admin); // Обединить данние в массиве


// ES-8
const avatar = 'Photo';
const res2 = {...user, ...admin, avatar}// Обединить данние в массив
console.log(res2);

const x = 25, y = 10;
// const coords = {
//   x: x,
//   y: y
// }             //// Первый вариант синтакс запис

// const coords = {
//   x,
//   y
// }  ////  Второй вариант

// const coords = { x,y,
//   calcSq(){
//     console.log(this.x*this.y);
//   }
// }    //  Первый вариант

const coords = {
  x: x,
  y: y,
  calcSq: function () {
    console.log(this.x * this.y);
  } 
} // Второй вариант
coords.calcSq();
console.log(coords);

const user1 = {
  name: 'default',
  pass: 'qwerty',
  rights: 'user'
};

const userName = user.name;

console.log(userName);

// Деструктуризация

const {name, pass, rights} = user;

console.log(name, rights);

const user2 = {
  name: {
    first: 'Sam',
    second: 'Smith'
  },
  pass: 'qwerty',
  rights: 'user'
};

console.log(user2.name.first);
const { name:{first, second}, pass1, rights1 } = user2;  // вытащить ключ значения в новую переменную

console.log(first, second);

function connect({
  host = 'localhost',
  port =  3000,
  user = 'default' } = {} ) {
    console.log(`host: ${host}, port: ${port}, user: ${user}`);
}


// connect({
//   port: 232,
//   host: 'fdsfs'
// });

connect();

const numbers = [3, 5, 6, 6];

const [a1, b1, c1] = numbers;

console.log(a1);

const numbers1 = [[3, 5], [6, 6]];
console.log(numbers1[0][1]);  /// получить дание с массива

const  [[a2, b2], [c2, d2]] = numbers1;

console.log(a2, c2);


// Пример деструктуризации

const country = {
  name: 'England',
  population: 2000000,
  gender: {
    male: ['15%', '40%'],
    female: ['16%', '29%']
  }
}
console.log(country.gender.male[0]);  // Класический пример получить переменную

const {gender: {male:[maleUnder18, maleAdult], female:[femaleUnder18, femaleAdult]}} = country; // Получить переменные с помощью деструктуризации

console.log(maleUnder18, femaleAdult);

