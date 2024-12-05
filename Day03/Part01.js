const readFile = require("../commons/readFile");
const data = readFile("Day03/input.txt").data;

const calculateValidSum = (input) => {
  const regex = /mul\((\d+),(\d+)\)/g;
  let ans = 0;

  const matches = input.matchAll(regex);

  for (const match of matches) {
    const [_, a, b] = match;
    ans += a * b;
  }

  return ans;
};

console.log(calculateValidSum(data));
