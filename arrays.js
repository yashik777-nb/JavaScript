//  Create some arrays
const numbers = [1, 2, 3, 4, 5, 1, 7];
const numbers2 = new Array(8, 9, 10, 11, 12, 13, 14);

const fruit = ["Apple", "banana", "Orange", "Pear"];
const mixed = [
  "Apple",
  1,
  true,
  null,
  undefined,
  { a: "a1", b: 6 },
  new Date(),
];
console.log(mixed);

let val;

// Get Length of Arrays
val = numbers.length;

// Check if it is an array
val = Array.isArray(numbers);

// Single Value
val = numbers[3];
val = numbers[0];

// Insert into array
numbers[2] = 100;

// Find Index of a Value
val = numbers.indexOf(1, 2);

// Mutating Arrays
// Add onto end
numbers.push(250);

// Add to front
numbers.unshift(120);

// Take off from End
numbers.pop();

// Take off from front
numbers.shift();

// Splive values
numbers.splice(1, 3);

// Reverse
numbers.reverse();

// Concantenate Arrays
val = numbers.concat(numbers2);

// Sort
val = fruit.sort();
val = numbers.sort();

// Use compare

val = numbers.sort(function (x, y) {
  return x - y;
});

val = numbers.sort(function (x, y) {
  return y - x;
});

// Find
function under5(x) {
  return x < 5;
}
function over5(x) {
  return x > 5;
}

val = numbers.find(under5);
val = numbers.find(over5);

console.log(numbers);
console.log(val);
