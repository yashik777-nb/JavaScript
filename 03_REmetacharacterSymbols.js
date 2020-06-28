// Regular Expression
let re;
// Lieral
re = /hello/;
re = /hello/i;

// Meta Character Symbols
re = /^h/; // Must Start With
re = /^h/i;

re = /d$/i; // Must End With
re = /World$/i;
re = /^hello$/i; // Must Start and End With
re = /^h.llo$/i; // Matches any one character
re = /h*llo/i; // Matches any one character zero or more times
re = /gre?a?y/i; // Optional Cahracter
re = /gre?a?y\?/i; // Escape Cahracter

// Brackets [] - Character sets
re = /gr[ae]y/i; // Must be an an a or an e
re = /[gf]ray/i; // Must be an an a or an e

// String to Match
// const str = "Hello World";
// const str = "Heello";
// const str = "Grey?";
const str = "Gray";

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) console.log(`${str} matches the RE ${re.source}`);
  else console.log(console.log(`${str} does NOT match the RE ${re.source}`));
}

reTest(re, str);
