'use strict';

//  Оператор разворота (...) преобразует элементы массива
//  в раздельные параметры, применяется для:
//  функций - f(...array);
//  литералов массива - [...array, 4, 5, 6]

var staticLanguages = ['C', 'C++', 'Java'];
var dynamicLanguages = ['JavaScript', 'PHP', 'Ruby'];

var languages = [].concat(staticLanguages, ['C#'], dynamicLanguages, ['Python']);

console.log(languages);

var add = function add(x, y, z) {
  return console.log(x + y + z);
};

add.apply(undefined, [1, 2, 3]);

// Удобно использовать, в некоторых случаях, вместо/c функции(ей) apply
function f(x, y, z) {}
var args = [0, 1, 2];
f.apply(null, args);

// vs ES6
function f_(x, y, z) {}
f_.apply(undefined, [0, 1, 2]);

// Так же удобно использовать при добавлении элементов в конец массива
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
Array.prototype.push.apply(arr1, arr2);

// vs ES6
var arr3 = [0, 1, 2];
var arr4 = [3, 4, 5];
arr3.push.apply(arr3, arr4);