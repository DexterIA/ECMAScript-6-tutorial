"use strict";

// 2. Оставшиеся параметры можно пулучить, используя
//    оператор разворота, только действовать он будет иначе
//    из оставшихся параметров сформирует массив
//    Важно! Использовать оператор (...) можно только перед
//    последним аргументом, иначе будет ошибка


function sum_es5() {
  console.log(arguments instanceof Array); // вернёт false, так как это объект,
  // у которого названия свойств это числа
  // и есть свойство length

  var sum = 0;

  Array.prototype.forEach.call(arguments, function (value) {
    sum += value;
  });
  console.log(sum);
}

sum_es5(1, 2, 3, 4, 5, 6);

function sum_es6() {
  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  console.log(values instanceof Array); // вернёт true, так как это массив

  var sum = 0;
  values.forEach(function (value) {
    sum += value;
  });
  console.log(sum);
}

sum_es6(1, 2, 3, 4, 5, 6);