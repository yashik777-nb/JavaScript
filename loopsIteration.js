// For Loop
for (let i = 0; i < 10; i++) {
  if (i == 2) {
    console.log(i + " is my fav number");
    continue;
  }
  if (i == 5) {
    console.log("Stopping the loop");
    break;
  }
  console.log("For Loop: " + i);
}

// While Loop
let j = 0;
while (j < 10) {
  console.log(j);
  j++;
}

// Do While
let z = 0;
do {
  console.log("Do While " + z);
  z++;
} while (z < 1);

// Ieration
const cars = ["Ford", "Mercedes", "Ferrari", "Honda", "Renault"];
for (let a = 0; a < cars.length; a++) {
  console.log(cars[a]);
}

// For Each
console.log("For Each--------------------------");
cars.forEach(function (car, index, array) {
  console.log(`${index}: ${car}`);
  console.log(array);
});

// Map
console.log("Map--------------------------");
const users = [
  { id: 1, name: "Yash" },
  { id: 2, name: "Sai" },
  { id: 3, name: "Janaki" },
];

const ids = users.map(function (user) {
  return user.id;
});
console.log(ids);

// For In
const person = {
  firstname: "Yash",
  lastname: "IK",
  age: 30,
};

for (let x in person) console.log(`${x}: ${person[x]}`);
