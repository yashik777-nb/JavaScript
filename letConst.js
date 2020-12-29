// Global Scope
var a = 1;
let b = 2;
const c = 3;

function test() {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log("Function Scope", a, b, c); // 4,5,6
}

test();
console.log(a,b,c);

if (true) {
  var a = 7;
  let b = 8;
  const c = 9;
  console.log("Block Scope", a, b, c); // 7,8,9
}
console.log(a,b,c);

for (let a = 0; a < 10; a++) {
  console.log(`Loop ${a}`); // 0,1,2,3,4,5,6,7,8,9
}

console.log("Global Scope", a, b, c); // 7,2,3
