// https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
//Mariia, Vatrych, Samokhvalov, Slava, Yuliia, Lesia, Olesia
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

// ============================================================================================================
// https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
//Mariia, Slava
function circleCircumference(circle) {
  return Number((Math.PI * 2 * circle.radius).toFixed(6))
}

// Yuliia
function circleCircumference(circle) {
  return 2 * Math.PI * circle.radius;
}

//Lesia
function circleCircumference(circle) {
  const radius = circle.radius;
  const circumference = 2 * Math.PI * radius;
  return circumference;
}

//Olesia
function circleCircumference(circle) {
  return parseFloat((2 * circle.radius * Math.PI).toFixed(6));
}


// =============================================================================================================
// https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
//Mariia, Yuliia, Lesia
function giveMeFive(obj) {
  const arr = []
  for (let key in obj) {
    if (key.length === 5) {
      arr.push(key)
    }
    if (obj[key].length === 5) {
      arr.push(obj[key])
    }
  }
  return arr
}

// Slava, Olesia
function giveMeFive(obj) {
  const arr = []
  for (const key in obj) {
    if (key.length === 5) arr.push(key)
    if (obj[key].length === 5) arr.push(obj[key])
  }
  return arr
}

// =============================================================================================================
// https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript
//Mariia
function buildFun(n) {
  const res = []

  for (let i = 0; i < n; i++) {
    res.push(function () {
      console.log(i)
      return i
    })
  }
  return res
}

// Slava 
function buildFun(n){
	const res = []
	for (let i = 0; i < n; i++){
		res.push(() => i)
	}
	return res
}

//Olesia
function buildFun(n) {
  const res = [];
  for (let i = 0; i < n; i++) {
    (function(j) {
      res.push(function() {
       return j;
      });
    })(i);
  }
  return res;
}

// =============================================================================================================
// https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript
//Mariia, Slava
// Get Coding :)

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, 'shark', status)
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, 'cat', status)
  }

  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, 'dog', status)
    this.master = master
  }
  greetMaster() {
    return `Hello ${this.master}`
  }
}

//Olesia
class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }
  
  introduce() {
    return "Hello, my name is " + this.name + " and I am " + this.age + " years old."  + "  Meow meow!";
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }
  greetMaster() {
    return "Hello " +this.master;
  }
}
