'use strict';

/*1 Вычислить сумму первых N элементов последовательности . параметр N задает пользователь
(например n=4 , 1+2+3+4) */

function sum (n) {
  let result = 0;
  for(let i = 1; i <= n; i++) {
    result += i;
  }
  return result;
}

function sumWhile (m) {
  let numb = 1;
  let res = 0;
  while (numb <= m){
   res += numb;
   numb++
  }
  return res;
}


/* 2.1 Создать объект Student который содержит следующие свойства: имя, фамилию, пол, контактные данные.
2.2 Создать объект, который содержит свойства, о факультете и кафедре.
2.3 Связать объекты между собой. т.е. прописать данные об факультете и кафедре для студента
2.4 Реализовать функцию выводит на экран всю информацию о студенте */

const student = {
 name: 'Test',
 surname: 'Testov',
 isMail: true,
 contacts: 'test@mail.ru',
 
 info: {
   faculty: 'UFKS',
   department: 'Rehabilitation',
 },

 getFullInfo (){
  return `${this.name} ${this.surname} ${this.isMail} ${this.contacts} ${this.info.faculty} ${this.info.department}`;
 }
};

/* 3.1 Создать числовой массив и проинициализировать его из 25 элементов.
3.1*Инициализация с помощью случайных чисел
3.2 Вывести элементы с четными индексами
3.3 Вывести только четные элементы (четные числа делятся на 2 без остатка)
3.4 Вывести индексы нулевых элементов (элемент равен нулю)
3.5 Подсчитать количество нулевых элементов*/
/*
const arr = [];
for(let i = 0; i < 25; i++){
arr[i] = Math.floor(Math.random() * 100);
}
console.log(arr);
}*/

const arr = new Array(25).fill(0).map((v) => Math.floor(Math.random() * 100));
console.log(arr);

const arrEvenIndex = [];
for(let i = 0; i < arr.length; i+=2) {
  arrEvenIndex.push(arr[i]);
};
console.log(arrEvenIndex);

const arrEvenElements = [];
for(let i = 0; i < arr.length; i++) {
  if(arr[i] % 2 === 0){
    arrEvenElements.push(arr[i]);
  }
}
console.log(arrEvenElements);


/*4 Создать классы:
- Книга (автор, название, год издания, издательство)
- Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер) */

class Book{
  constructor(author, title, yearPublication, publisher){
  this.author = author;
  this.title = title;
  this.yearPublication = yearPublication;
  this.publisher = publisher;
  }
};

class ElectrBook extends Book {
  constructor (format, elektrNumb){
    super(author, title, yearPublication, publisher)
    this.format = format;
    this.elektrNumb = elektrNumb;
  }
};

/*5 Требуется написать функцию, выводящую в консоль числа от 1 до n,
 где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
вывод fizz вместо чисел, кратных 3;
вывод buzz вместо чисел, кратных 5; */