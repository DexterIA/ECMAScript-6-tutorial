'use strict';

var person = {
  firstName: 'John',
  lastName: 'Dorian'
};

var lastName = person.lastName,
    firstName = person.firstName; // в данном случае
// имена переменных должны совпадать с
// именами свойств объекта (порядок не важен)

console.log(firstName, lastName);

// таким образом можно указать свои имена переменных
var name = person.firstName,
    surname = person.lastName,
    _person$age = person.age,
    age = _person$age === undefined ? 25 : _person$age;

console.log(name, surname, age);

// вложенные свойства
var user = {
  firstName: 'John',
  lastName: 'Dorian',
  social: {
    facebook: 'johnDo',
    twitter: 'JD'
  }
};

var first = user.firstName,
    last = user.lastName,
    twitter = user.social.twitter;


console.log(first, last, twitter);

function post(url, _ref) {
  var _ref$data = _ref.data,
      firstName = _ref$data.firstName,
      lastName = _ref$data.lastName;
  // в данном случае параметр data будет не определён
  console.log(url + ' ' + firstName + ' ' + lastName);
}
post('api/users', { data: user });