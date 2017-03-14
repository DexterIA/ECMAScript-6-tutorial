// 3. для каждой итерации в цикле создаётся своя переменная


// пример с использованием var
for (var i = 0; i < 3; ++i) {
  setTimeout(function () {
    console.log('Значение переменной var: ' + i);
  }, 100);
}


// пример с использованием let
for (let i = 0; i < 3; ++i) {
  setTimeout(function () {
    console.log('Значение переменной let: ' + i);
  }, 200);
}