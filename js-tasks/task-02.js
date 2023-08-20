// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

// Yuliia
function stringToArray(string) {
  return string.split(" ");
}

// Shchyrba
function stringToArray(string){
  return string.split(' ');
}

// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

// Yuliia
function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}

// Shchyrba
function DNAtoRNA(dna) {
  return dna.replace(/T/g, 'U')
}

// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

// Yuliia
var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};

// Shchyrba
var min = function(list){
  const minimum = Math.min.apply(null, list);
  return minimum;
}

var max = function(list){
  const maximum = Math.max.apply(null, list);
  return maximum;
}

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

// Shchyrba
function min(arr, toReturn) {
  if (toReturn === 'value') {
    return Math.min.apply(null, arr);
  } else if (toReturn === 'index') {
    return arr.indexOf(Math.min.apply(null, arr));
  }
}


// https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript


// https://www.codewars.com/kata/beginner-lost-without-a-map


// https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript

// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

// Lesia
function stringToArray(string){
  return string.split(' ')
}

// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

// Lesia
function DNAtoRNA(dna) {
  return dna.replace(/T/g, 'U');
}

// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

// Lesia
const min = function(list) {
  let minValue = list[0];
  for (let i = 1; i < list.length; i++) {
      if (list[i] < minValue) {
          minValue = list[i];
      }
  }
  return minValue;
};
const max = function(list) {
  let maxValue = list[0];     
  for (let i = 1; i < list.length; i++) {
      if (list[i] > maxValue) {
          maxValue = list[i];
      }
  }
  return maxValue;
};

// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

//Lesia
function min(arr, toReturn) {
  if (toReturn === 'value') {
      const minValue = Math.min(...arr);
      return minValue;
  } else if (toReturn === 'index') {
      const minIndex = arr.indexOf(Math.min(...arr));
      return minIndex;
  }
}

