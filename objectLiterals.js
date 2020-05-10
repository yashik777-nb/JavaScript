const person = {
  firstname: "Steve",
  lastname: "Smith",
  age: 30,
  email: `${firstname}.${lastname}@email.com`,
  hobbies: ["music", "sports"],
  address: {
    city: "Leamington",
    state: "UK",
  },
  getBirthYear: function () {
    return 2020 - this.age;
  },
  getFirstName: function () {
    return this.firstname;
  },
  getEmail: function () {
    return `${this.firstname}.${this.lastname}@email.com`;
  },
};
console.log(person);
let val;

val = person;

// Get Specific Value
val = person.firstname;
val = person["firstname"];

val = person.email;
val = person.hobbies[1];
val = person.address.state;
val = person.address["city"];
val = person.getBirthYear();

const people = [
  { name: "John", age: 30 },
  { name: "Steve", age: 27 },
  { name: "Nancy", age: 40 },
];

val = people[1].name;

for (i = 0; i < people.length; i++) {
  console.log(people[i]);
}

console.log(val);
