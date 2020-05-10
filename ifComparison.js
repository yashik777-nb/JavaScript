const id = "100";

// Equal to
if (id == 100) {
  console.log(true);
} else console.log(false);

// Not  Equal to
if (id != 100) {
  console.log(true);
} else console.log(false);

// Check Type and Value
if (id === 100) {
  console.log(true);
} else console.log(false);

// Not Equal to Check Type and Value
if (id !== 100) {
  console.log(true);
} else console.log(false);

// Test if undefined
if (typeof id != "undefined") console.log(`The ID is ${id}`);
else console.log("No ID");

// Greater than and Lesser than
if (id >= 200 && id <= 300) console.log(true);
else console.log(false);

// If else
const color = "Yellow";
if (color === "Yellow") {
  console.log("Color  is Yellow");
} else if (color === "Red") {
  console.log("COlor  is Red");
}

// Logical Operators
const name = "Steve";
const age = 18;

if (age > 0 && age < 12) console.log(`${name} is a child`);
else if (age >= 13 && age <= 19) console.log(`${name} is a teenager`);
else if (age > 19) console.log(`${name} is an adult`);

if (age < 16 || age > 65) console.log(`${name} cannot run in race`);
else console.log(`${name} can run the race`);

// Ternary Operator
console.log(id === 100 ? "Correct" : "InCorrect");
