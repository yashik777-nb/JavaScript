const name = "John";
const job = "Web Developer";
const age = 28;
const city = "Leamington";

// Without Teamplate Lierals
let html =
  "<ul><li>" +
  name +
  "</li>" +
  "<li>" +
  job +
  "</li>" +
  "<li>" +
  age +
  "</li>" +
  "<li>" +
  city +
  "</li>" +
  "</ul>";

function hello() {
  return "Yash";
}

// With template Strings
html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Name: ${job}</li>
        <li>Name: ${age}</li>
        <li>Name: ${city}</li>
        <li>Name: ${2 + 2}</li>
        <li>Name: ${hello()}</li>
        <li>Name: ${age > 30 ? "overAge" : "Young"}</li>
    </ul>
`;

document.body.innerHTML = html;
