function unscrambleEggs(word) {
  return word.replace(/(egg)/gi, "");
}
console.log(unscrambleEggs("Beggegeggineggnegger"));

function solution(string) {
  let strNew = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      strNew += " " + string[i];
    } else {
      strNew += string[i];
    }
  }

  return strNew;
}

console.log(solution("camelCasing"));

// https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript

function nbYear(p0, percent, aug, p) {
  let result = 0;
  while (p0 <= p) {
    p0 = Math.floor(p0 + p0 * (percent / 100) + aug);
    result++;
  }
  console.log("sum", p0);
  console.log("count", result);
  return result;
}

console.log(nbYear(1500, 5, 100, 5000));
