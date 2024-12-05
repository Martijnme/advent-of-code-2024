const readFile = require("../commons/readFile");
const data = readFile("Day03/input.txt").data;

const reduceValidParts = (input) => {
  const [first, ...rest] = input.split("don't()");
  return first + rest.map((entry) => entry.split("do()").slice(1)).join("");
};
const calculateValidSum = (input) => {
  validPart = reduceValidParts(input);

  const regex = /mul\((\d+),(\d+)\)/g;
  let ans = 0;

  const matches = validPart.matchAll(regex);

  for (const match of matches) {
    const [_, a, b] = match;
    ans += a * b;
  }

  return ans;
};

console.log(calculateValidSum(data));
