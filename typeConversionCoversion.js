let val;

// Num to String;
val = 5;
val = String(5);
val = String(4 + 4);

// Bool to String
val = String(true);

// Date to String
val = String(new Date());

// Array to String
val = String([1, 2, 3, 4, 5]);

// toString
val = (5).toString();
val = true.toString();

// String to Number
val = "5";
val = Number("5");
val = Number(true);
val = Number(false);
val = Number(null);
val = Number(undefined);
val = Number("Hello");
val = Number([1, 2, 3, 4]);
val = Number("100.30");
val = parseInt("1010.80");
val = parseFloat("100.80");

// Output
console.log(val);
console.log(typeof val);
//console.log(val.length);
console.log(val.toFixed());

// Type Coversion
const val1 = String(5);
const val2 = 6;
const sum = Number(val1) + val2;

console.log(sum);
console.log(typeof sum);
