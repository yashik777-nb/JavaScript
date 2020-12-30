const firstName = "IK";
const lastName = "Yashh";
const age = 28;

let val;

val = firstName + lastName;

//  Concatenatiion
val = firstName + " " + lastName;

// Append
val = "Brand ";
val += "Traversy";

val = "My Name is " + firstName + ". My Age Is " + age;

// Escaping
val = "That Awesome, I can't wait";

// Length
val = firstName.length;

// Conact
val = firstName.concat(" ", lastName);

// Uppercase and Lowercase
val = val.toUpperCase();
val = val.toLowerCase();

val = firstName[0];
val = firstName[3];

// Index Of
val = lastName.indexOf("h");
val = lastName.lastIndexOf("h");

// Char At

val = firstName.charAt("0");

// Get last Character
val = lastName.charAt(lastName.length - 1);

// Get Sub String
val = lastName.substring(0, 4);

// Slice()
val = lastName.slice(0, 2);
val = lastName.slice(-2);

// Split
val = lastName.split("");

// Replace
val = lastName.replace("Yashh", "Janaki");

// Includes
console.log(val);
val = val.includes("Janaki");
console.log(val);
