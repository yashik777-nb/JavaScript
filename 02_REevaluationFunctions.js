let re;
re = /hello/;
re = /hello/i; // i = case insensitive
// re = /hello/g  // g = global search

console.log(typeof re, re);
console.log(re.source);

// Exec () - Result in an array if there is a match or null
const result = re.exec("Yash hello world");
console.log(result);
console.log(`Match: ${result[0]};`, `Match Index: ${result.index}`);

// Test() - returns true or false based on match
const result1 = re.test("Hello");
console.log("Test() " + result1);

// Match() - returns an array if there is a match or null
const str = "Hello There";
const result2 = str.match(re);
console.log("Match() " + result2);

// Search - Returns the index of the first match - or returns -1
const str1 = "Hello there";
const result3 = str1.search(re);
const result4 = str1.search("Hello");
console.log("Search() " + result3, result4);

// Replace - Return a new string with some or all matches of a pattern
const str2 = "Hello there";
const newStr2 = str2.replace(re, "Yash");
console.log(newStr2, str2);
