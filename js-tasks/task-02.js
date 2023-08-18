// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

// Yuliia
function stringToArray(string) {
  return string.split(" ");
}


// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript


// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

// Yuliia
var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};


// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

// Yuliia
function min(arr, toReturn) {
  for (const i of arr) {
    if (toReturn === "value") {
      return Math.min(...arr);
    }
    if (toReturn === "index") {
      minNumber = Math.min(...arr);
      return arr.indexOf(minNumber);
    }
  }
}


// https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript


// https://www.codewars.com/kata/beginner-lost-without-a-map


// https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript
