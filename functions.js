// function declarations
function greet(name = "Yashwanth") {
  //   console.log("Hello");
  return "Hello " + name;
}

console.log(greet("Yash"));
console.log(greet());

//  Function Expressions
const square = function (x = 3) {
  return x * x;
};
console.log(square(8));

// Immediately Invocable Function Expressions - FE's

(function (name) {
  console.log("IFEE Ran.." + name);
})("Yash");

// Property Methods

const toDo = {
  add: function () {
    console.log("Add tofo...");
  },
  edit: function (id) {
    console.log("Edit " + id);
  },
};

toDo.delete = function (id) {
  console.log("Delete " + id);
};

toDo.add();
toDo.edit(3);
toDo.delete(3);
