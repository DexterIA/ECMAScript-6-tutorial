'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// левая часть это деструктивное выражение
// в квадратных скобках содержатся переменные,
// которые будут инициализированы значениями из массива в правой части

var languages = ['JavaScript', 'PHP', 'Python', 'Ruby'];
var js = languages[0],
    php = languages[1],
    py = languages[2],
    rb = languages[3];


console.log(js, php, py, rb);

// Примеры:
// Переменных больше, чем размер массива
var numbers = [1, 2, 3];

var _numbers = numbers,
    _numbers2 = _slicedToArray(_numbers, 4),
    one = _numbers2[0],
    two = _numbers2[1],
    three = _numbers2[2],
    four = _numbers2[3];

console.log(one, two, three, four); // four - undefined

// вложенные массивы
numbers = [1, 2, [3, 4]];
var _numbers3 = numbers;

var _numbers4 = _slicedToArray(_numbers3, 3);

one = _numbers4[0];
two = _numbers4[1];

var _numbers4$ = _slicedToArray(_numbers4[2], 2);

three = _numbers4$[0];
four = _numbers4$[1];


console.log(one, two, three, four);

// пропуск переменных и значения по умолчанию
var jedi = ['Anakin Skywalker', 'Obi-Wan Kenobi', 'Luke Skywalker'];
var Anakin = jedi[0],
    Luke = jedi[2],
    _jedi$ = jedi[3],
    Yoda = _jedi$ === undefined ? 'Yoda' : _jedi$;


console.log(Anakin, Luke, Yoda);

// использование оставшихся параметров
var story = ['Snow White', '1st dwarf', '2nd dwarf', '3rd dwarf', '4th dwarf', '5th dwarf', '6th dwarf', '7th dwarf'];
var SnowWhite = story[0],
    SevenDwarfs = story.slice(1);


console.log(SnowWhite, SevenDwarfs);

// использование деструктивного присваивания массивов в параметрах функции
greet(['Hello', 'world']);

function greet(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      greeting = _ref2[0],
      name = _ref2[1];

  console.log(greeting + ' ' + name);
}