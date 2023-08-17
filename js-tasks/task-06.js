// Opposites Attract https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

// Slava
function lovefunc(flower1, flower2){
    return flower1 % 2 !== flower2 % 2;
}

//Mariia
function lovefunc(flower1, flower2){
    if (flower1 % 2 !== flower2 % 2){
      return true;
    } else {
      return false;
    }
  }

//Olesia
  function lovefunc(flower1, flower2){
    if ((flower1 + flower2) % 2 === 1) {
      return true;
    }
    return false;
  }
