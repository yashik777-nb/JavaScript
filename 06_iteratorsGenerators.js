// Iterators and Generator both are part of ES6 standard

// Iterator
function nameIerator(names) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < names.length
        ? { value: names[nextIndex++], done: false }
        : { done: true };
    },
  };
}

// Create an array of names
const namesArr = ["Jack", "Jill", "John"];

// Initialize the iterator and pass in name array

const names = nameIerator(namesArr);

console.log(names.next());
console.log(names.next());
console.log(names.next());
console.log(names.next());

// Generator
function* sayNames() {
  yield "Jack";
  yield "Jill";
  yield "John";
}

const name = sayNames();
console.log("Generator", name.next());
console.log("Generator", name.next());
console.log("Generator", name.next());
console.log("Generator", name.next());

// ID Generator
function* createID() {
  let index = 0;
  while (true) {
    yield index++;
  }
}

const gen = createID();
console.log("ID: " + gen.next().value);
console.log("ID: " + gen.next().value);
