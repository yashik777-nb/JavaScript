const today = new Date();
let birthday = new Date("09-09-2001 11:25:00");
birthday = new Date("September 10 1981");
birthday = new Date("9/10/1981");
let val;

val = today;

val = today.toString();

val = birthday;

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(2012);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(31);
val = birthday;

console.log(val);
console.log(typeof val);
