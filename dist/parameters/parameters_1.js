'use strict';

// 1. Параметр по умолчанию это то значение,
//    которое будет применено в случае отсутсвия аргумента
//    или если он равен undefined


var world = 'world';

function greet() {
  var greeting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hello';
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : world;

  console.log(greeting + ' ' + name);
}

greet(); // Hello world
greet('Hi'); // Hi world
greet(undefined, 'Bill'); // Hello Bill
greet('Hello', 'Alex'); // Hello Alex