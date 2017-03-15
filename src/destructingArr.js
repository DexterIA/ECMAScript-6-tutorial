// левая часть это деструктивное выражение
// в квадратных скобках содержатся переменные,
// которые будут инициализированы значениями из массива в правой части

let languages = ['JavaScript', 'PHP', 'Python', 'Ruby'];
let [js, php, py, rb] = languages;

console.log(js, php, py, rb);

// Примеры:
// Переменных больше, чем размер массива
let numbers = [1, 2, 3];
let [one, two, three, four] = numbers;

console.log(one, two, three, four);  // four - undefined

// вложенные массивы
numbers = [1, 2, [3, 4]];
[one, two, [three, four]] =  numbers;

console.log(one, two, three, four);

// пропуск переменных и значения по умолчанию
let jedi = ['Anakin Skywalker', 'Obi-Wan Kenobi', 'Luke Skywalker'];
let [Anakin,, Luke, Yoda = 'Yoda'] = jedi;

console.log(Anakin, Luke, Yoda);

// использование оставшихся параметров
let story = ['Snow White', '1st dwarf', '2nd dwarf', '3rd dwarf',
  '4th dwarf', '5th dwarf', '6th dwarf', '7th dwarf'];
let [SnowWhite, ...SevenDwarfs] = story;

console.log(SnowWhite, SevenDwarfs);

// использование деструктивного присваивания массивов в параметрах функции
greet(['Hello', 'world']);

function greet ([greeting, name]) {
  console.log(`${greeting} ${name}`);
}

