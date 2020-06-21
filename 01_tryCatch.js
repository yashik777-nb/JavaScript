const user = { email: "123@gmail.com" };

try {
  // Reference Error
  // myFunction();

  // Type Error
  // null.myFunction();

  // Syntax Error
  // eval("Hello World");

  // URI Error
  // decodeURIComponent("%");

  // Custom Error
  // if (!user.name) throw "User has no name";
  if (!user.name) throw new SyntaxError("User has no name");
} catch (e) {
  console.log(e);
  console.log(e.message);
  console.log(e.name);
  console.log(e instanceof ReferenceError);
  console.log(e instanceof TypeError);
  console.log(e instanceof SyntaxError);
  console.log(e instanceof URIError);
} finally {
  console.log("Runs regardless of the result");
}

console.log("Program Continues...");
