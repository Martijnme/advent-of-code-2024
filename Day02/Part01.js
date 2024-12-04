const readFile = require("../commons/readFile");

const reports = readFile("Day02/input.txt").lines;
console.log(reports.length);

answer = reports.map((level) => {
  steps = level
    .trim()
    .split(/\s+/)
    .map((step) => parseInt(step));

  const increasing = steps.every(
    (step, index) => index === 0 || step > steps[index - 1]
  );
  const decreasing = steps.every(
    (step, index) => index === 0 || step < steps[index - 1]
  );

  if (!increasing && !decreasing) return false;

  return steps.reduce((acc, curr, index) => {
    if (!acc || index === steps.length - 1) return acc;
    return Math.abs(curr - steps[index + 1]) > 3 ? false : acc;
  }, true);
});

console.log(answer.filter(Boolean).length);

// answer: 306
