let person = {
  firstName: 'John',
  lastName: 'Dorian'
};

let {lastName, firstName} = person; // в данном случае
                                    // имена переменных должны совпадать с
                                    // именами свойств объекта (порядок не важен)
console.log(firstName, lastName);

// таким образом можно указать свои имена переменных
let {firstName: name, lastName: surname, age = 25} = person;
console.log(name, surname, age);

// вложенные свойства
let user = {
  firstName: 'John',
  lastName: 'Dorian',
  social: {
    facebook: 'johnDo',
    twitter: 'JD'
  }
};

let {firstName: first, lastName: last, social: { twitter }} = user;

console.log(first, last, twitter);

function post(url, {data: {firstName, lastName}}) { // в данном случае параметр data будет не определён
  console.log(`${url} ${firstName} ${lastName}`);
}
post('api/users', {data: user});
