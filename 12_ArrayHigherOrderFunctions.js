const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Technology", start: 1989, end: 2010 },
  { name: "Company Five", category: "Finance", start: 2009, end: 2014 },
  { name: "Company six", category: "Retail", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Finance", start: 1981, end: 1989 },
  { name: "Company Ten", category: "Retail", start: 1993, end: 2004 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// For
// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// For Each Method
// companies.forEach(function (company) {
//   console.log(company.name);
// });

// companies.forEach((company) => console.log(company.name));

// Filter Function
//  Ages that are 21 and over

let canDrink = [];
// Using For Loop
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) canDrink.push(ages[i]);
// }

// Using Filter
// canDrink = ages.filter(function (age) {
//   if (age >= 21) return true;
// });

// canDrink = ages.filter((age) => age >= 21);

// console.log(canDrink);

// // Filter retail companies
// const retailCompanies = companies.filter(
//   (company) => company.category == "Retail"
// );
// console.log(retailCompanies);

// Filter 80s Companies
// const company80s = companies.filter(
//   (company) => company.start >= 1980 && company.start <= 1989
// );
// console.log(company80s);

// Get companies that lasted 10years
// const comapanies10years = companies.filter(
//   (company) => company.end - company.start >= 10
// );
// console.log(comapanies10years);

// Map
// create array of company names
// const companyNames = companies.map((company) => company.name);
// console.log(companyNames);

// Fomatted company names
// const testMap = companies.map(
//   (company) => `${company.name} [${company.start} - ${company.end}]`
// );
// console.log(testMap);

// Chaining on map
// const agesSquare = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);
// console.log(agesSquare);

// Sort
// sort companies by start year
const sortedCompanies = companies.sort((c1, c2) =>
  c1.start > c2.start ? 1 : -1
);
console.log(sortedCompanies);

// sort ages
const agesSort = ages.sort();
const agesSort1 = ages.sort((a, b) => a - b); // ascending order
console.log(agesSort);

// Reduce
// Add all ages
let ageSum = 0;
for (let a = 0; a < ages.length; a++) {
  ageSum += ages[a];
}

ageSum = ages.reduce((total, age) => total + age, 0); // second parameter is the start point of the sum
console.log(ageSum);

// Total years for all companies
const totalyears = companies.reduce(
  (total, company) => total + (company.end - company.start),
  0
);
console.log(totalyears);

// Chaining all methods
const combined = ages
  .map((age) => age * 2)
  .filter((age) => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

console.log(combined);
