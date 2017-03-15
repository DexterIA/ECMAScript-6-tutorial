'use strict';

//  function add (x, y) {
//    return x + y;
//  }

var add = function add(x, y) {
  return x + y;
};

//  function square (x) {
//    return x * x;
//  }

var square = function square(x) {
  return x * x;
};

//  function giveMeAnswer () {
//    return 42;
//  }

var giveMeAnswer = function giveMeAnswer() {
  return 34;
};

///  function log() {
///    console.log('Logging...');
///  }

var log = function log() {
  return console.log('Logging...');
};

var multyply = function multyply(x, y) {
  var result = x * y;
  return result;
};

var getPerson = function getPerson() {
  return { name: 'John' };
};

(function () {
  return console.log('IIFE');
})();

console.log(add(5, 7));
console.log(square(5));
console.log(giveMeAnswer());
log();
console.log(multyply(6, 7));
console.log(getPerson());

// со стрелочными фунциями нельзя использовать оператор new
// к стрелочным функциям бесполезно применять bind, call, apply