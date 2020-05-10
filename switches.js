const color = "red";

switch (color) {
  case "red":
    console.log("The color is Red");
    break;
  case "yellow":
    console.log("The color is Yellow");
    break;
  default:
    console.log("This is switch case");
}

switch (new Date().getDay()) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
}
