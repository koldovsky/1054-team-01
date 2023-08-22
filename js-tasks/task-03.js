// https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
//Mariia
class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }

// ============================================================================================================
// https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
//Mariia
function circleCircumference(circle) {
    return Number((Math.PI * 2 * circle.radius).toFixed(6));
  }

// =============================================================================================================
// https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
//Mariia
function giveMeFive(obj) {
    const arr = [];
    for (let key in obj) {
      if (key.length === 5) {
        arr.push(key);
      }
      if (obj[key].length === 5) {
        arr.push(obj[key]);
      }
    }
    return arr;
  }

// =============================================================================================================
// https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript


// =============================================================================================================
// https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript
