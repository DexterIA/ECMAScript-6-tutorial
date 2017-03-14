//  function add (x, y) {
//    return x + y;
//  }

let add = (x, y) => x + y;

//  function square (x) {
//    return x * x;
//  }

let square = x => x * x;

//  function giveMeAnsver () {
//    return 42;
//  }

let giveMeAnsver = () => 34;

///  function log() {
///    console.log('Logging...');
///  }

let log = () => console.log('Logging...');

let multyply = (x, y) => {
  let result = x * y;
  return result;   // у стрелочной функции обязательно должен быть return
};

let getPerson = () => ({name: 'John'});

(() => console.log('IIFI'))();


console.log(add(5, 7));
console.log(square(5));
console.log(giveMeAnsver());
log();
console.log(multyply(6, 7));
console.log(getPerson());


// со стрелочными фунциями нельзя использовать оператор new
// к стрелочным функциям бесполезно применять bind, call, apply
