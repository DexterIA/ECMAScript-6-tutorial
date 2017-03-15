// 1. Параметр по умолчанию это то значение,
//    которое будет применено в случае отсутсвия аргумента
//    или если он равен undefined


const world = 'world';

function greet(greeting = 'Hello', name = world) {
  console.log(`${greeting} ${name}`);
}

greet();                   // Hello world
greet('Hi');               // Hi world
greet(undefined, 'Bill');  // Hello Bill
greet('Hello', 'Alex');    // Hello Alex


