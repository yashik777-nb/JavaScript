var obj = { num: 2 };
var obj1 = { num: 5 };

var addToThis = function (a, b) {
  return this.num + a + b;
};

// Call -> calling the function on the object.
// 1. first parameter is the object on which the function is to be called.
// 2. second parmeter onwards are the function parameters.
console.log(addToThis.call(obj, 3, 4));
console.log(addToThis.call(obj1, 3, 4));

// Apply -> send all the arguments as  an array. similar to call function
var array = [1, 2];
console.log(addToThis.apply(obj, array));

// Bind ->
var obj3 = addToThis.bind(obj);
console.dir(obj3);

console.log(obj3(1, 2, 3));

// Example - Call
var fn = function () {
  console.log(arguments);
  console.log([].slice.call(arguments));
};

fn(1, 2, 3, 4);

// Sub Constructor and Base constructor calling -> when classes are not there.
let Mammal = function (legs) {
  this.legs = legs;
};

let Cat = function (legs, isDomesticated) {
  Mammal.call(this, legs);
  this.isDomesticated = isDomesticated;
};

let lion = new Cat(4, false);
console.log(lion);

// Example - Apply
let numArr = [1, 2, 3, 4];

var min = Math.min(1, 2, 3);
min = Math.min.apply(null, array);
console.log(min);

// Example1 - Bind
let Button = function (content) {
  this.content = content;
};
Button.prototype.click = function () {
  console.log(`${this.content}: Clicked`);
};

let newButton = new Button("add");

let looseClick = newButton.click;
let boundButton = newButton.click.bind(newButton);

looseClick();
boundButton();

// Example2 - Bind -> Solution 1 to access parse function
let myObj = {
  asyncGet(cb) {
    cb();
  },
  parse() {
    console.log("Parse Called");
  },
  render() {
    let that = this;
    this.asyncGet(function () {
      that.parse();
    });
  },
};

// Example2 - Bind -> Solution 2 to access parse function
myObj = {
  asyncGet(cb) {
    cb();
  },
  parse() {
    console.log("Parse Called");
  },
  render() {
    this.asyncGet(
      function () {
        this.parse();
      }.bind(this)
    );
  },
};

myObj.render();
