// Maps - Key value pairs - can you any type as a key or a value

const map1 = new Map();

// Set Keys
const key1 = "some string",
  key2 = {},
  key3 = () => {};

// Set map values by key
map1.set(key1, "Value of Key1");
map1.set(key2, "Value of Key2");
map1.set(key3, "Value of Key3");

console.log(map1);

// Get values by keys
console.log(map1.get(key1));
console.log(map1.get(key2));
console.log(map1.get(key3));

// Count values in a map
console.log(`Count: ${map1.size}`);

// Iterator
// Loop using for...of to get key and values
for (let [key, value] of map1) {
  console.log(`${key} = ${value}`);
}

// Iterate Keys only
for (let key of map1.keys()) {
  console.log(key);
}

// Iterate Values only
for (let value of map1.values()) {
  console.log(value);
}

// Loop using For Each
map1.forEach((value, key) => {
  console.log(`${key} = ${value}`);
});

// Convert maps to arrays
const keyValArr = Array.from(map1);
console.log(keyValArr);

// Convert maps to arrays for values
const keyValArrVal = Array.from(map1.values());
console.log(keyValArrVal);

// Convert maps to arrays for keys
const keyValArrKeys = Array.from(map1.keys());
console.log(keyValArrKeys);
