//  ... -> Spread Opearator

// Destructuring

let a, b;
[a, b] = [100, 200];

// Rest Pattern
[a, b, ...rest] = [100, 200, 300, 400, 500, 600];
[a, b, c, ...rest] = [100, 200, 300, 400, 500, 600];

console.log(a, b);
console.log(a, b, c, rest);

({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
console.log(a, b, rest);

// Array Destructuring
const people = ["John", "Beth", "Mike"];
const [person1, person2, person3] = people;

console.log(person1, person2, person3);

// Parse array returned from function
function getPeople() {
  return ["John", "Beth", "Mike"];
}

let person4, person5, person6;
[person4, person5, person6] = getPeople();
console.log(person4, person5, person6);

// Object Destructuring
const person7 = {
  name: "Test1",
  age: 30,
  city: "Coventry",
  gender: "M",
  sayHello: () => `Hello ${name}`,
};

// Old ES5
// const name1 = person7.name,
//   age1 = person7.age,
//   city1 = person7.city,
//   gender1 = person7.gender;

// New ES6 Des
const { name, age, city, sayHello } = person7;
console.log(name, age, city, sayHello());
