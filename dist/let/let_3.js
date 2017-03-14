'use strict';

// 3. для каждой итерации в цикле создаётся своя переменная


// пример с использованием var
for (var i = 0; i < 3; ++i) {
  setTimeout(function () {
    console.log('Значение переменной var: ' + i);
  }, 100);
}

// пример с использованием let

var _loop = function _loop(_i) {
  setTimeout(function () {
    console.log('Значение переменной let: ' + _i);
  }, 200);
};

for (var _i = 0; _i < 3; ++_i) {
  _loop(_i);
}