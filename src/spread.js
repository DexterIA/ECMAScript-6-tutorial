//  Оператор разворота (...) преобразует элементы массива
//  в раздельные параметры, применяется для:
//  функций - f(...array);
//  литералов массива - [...array, 4, 5, 6]

let staticLanguages  = ['C', 'C++', 'Java'];
let dynamicLanguages = ['JavaScript', 'PHP', 'Ruby'];

let languages = [...staticLanguages, 'C#', ...dynamicLanguages, 'Python'];

console.log(languages);

let add = (x, y, z) => console.log(x + y + z);

add(...[1, 2, 3]);

// Удобно использовать, в некоторых случаях, вместо/c функции(ей) apply
function f(x, y, z) {}
let args = [0, 1, 2];
f.apply(null, args);

// vs ES6
function f_(x, y, z) { }
f_(...[0, 1, 2]);

// Так же удобно использовать при добавлении элементов в конец массива
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];
Array.prototype.push.apply(arr1, arr2);

// vs ES6
let arr3 = [0, 1, 2];
let arr4 = [3, 4, 5];
arr3.push(...arr4);
