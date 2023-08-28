// Messi Goals https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  const total = laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  return total
}

// Make negative    https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

function makeNegative(num) {
  if (num > 0) {
    return -num;
  }
  return num;
}

// Game Move https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript

function move(position, roll) {
  return position + 2 * roll;
}

// Personalized Message https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript

function greet(name, owner) {
  if (name === owner) {
    return 'Hello boss';
  }
  return 'Hello guest';
}

// Keep Hydrated https://www.codewars.com/kata/keep-hydrated-1/train/javascript

function litres(time) {
  return (time / 2) | 0;
}

// Opposites Attract https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}
