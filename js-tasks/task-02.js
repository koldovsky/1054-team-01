// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

// Yuliia, Lesia, Shchyrba, Slava
function stringToArray(string) {
  return string.split(" ");
}


// ============================================================================================
// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

// Yuliia, Lesia, Shchyrba, Slava
function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}


// ============================================================================================
// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

// Yuliia, Slava
var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};

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

// Shchyrba
var min = function(list){
  const minimum = Math.min.apply(null, list);
  return minimum;
}

var max = function(list){
  const maximum = Math.max.apply(null, list);
  return maximum;
}


// ============================================================================================
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

// Shchyrba
function min(arr, toReturn) {
  if (toReturn === 'value') {
    return Math.min.apply(null, arr);
  } else if (toReturn === 'index') {
    return arr.indexOf(Math.min.apply(null, arr));
  }
}

// Slava
function min(arr, toReturn) {
  return toReturn === 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr));
}



// ============================================================================================
// https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript

// Slava
function warnTheSheep(queue) {
  if (queue[queue.length - 1] === 'wolf') {
      return 'Pls go away and stop eating my sheep';
  }
  return `Oi! Sheep number ${queue.length - 1 - queue.indexOf('wolf')}! You are about to be eaten by a wolf!`;
}


// ============================================================================================
// https://www.codewars.com/kata/beginner-lost-without-a-map

// Slava
function maps(x){
  let arr = [];
  for (num of x) {
      arr.push(num * 2);
  }
  return arr;
}


// ============================================================================================
// https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript

// Slava
function firstNonConsecutive (arr) {
  for (x of arr) {
      if (arr.indexOf(x) === arr.length - 1) return null
      if (arr[arr.indexOf(x) + 1] - x > 1) return arr[arr.indexOf(x) + 1]
  }
}