// SETS - Store Unique values of any type

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add("Yash");
set1.add({ name: "Yash" });
set1.add(true);
set1.add("100");

const set2 = new Set([1, true, "Test"]);
console.log(set2);

console.log();

console.log(set1, set1.size);

// Check for values
console.log("HAS", set1.has(100));
console.log("HAS", set1.has(50 + 50));
console.log("HAS", set1.has({ name: "Yash" })); // It will be false as teh reference is being checked.

// Delete from Set
set1.delete(100);
console.log(set1);

// Iterate through sets
// For..of
console.log("V1");
for (let item of set1) {
  console.log(item);
}

console.log("V2");
for (let item of set1.keys()) {
  // set1.values() will also return same values
  console.log(item);
}

console.log("V3");
for (let item of set1.entries()) {
  // Gives same value again but return each element as an array
  // set1.values() will also return same values
  console.log(item);
}
//For Each
set1.forEach((item) => console.log(item));

// Convert Sets to Arrays
const arr = Array.from(set1);
console.log(arr);
