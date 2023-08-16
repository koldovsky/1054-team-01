// https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript

function basicOp(operation, value1, value2) {
  if (operation === "+") {
    return value1 + value2;
  } else if (operation === "-") {
    return value1 - value2;
  } else if (operation === "*") {
    return value1 * value2;
  } else if (operation === "/") {
    if (value2 !== 0) {
      return value1 / value2;
    } else {
      return "Cannot divide by zero";
    }
  } else {
    return "Invalid operation";
  }
}
