const readFile = require("../commons/readFile");

let anwser = 0;

const column1 = [];
const column2 = {};

const locations = readFile("Day01/input.txt").lines;

locations.forEach((line) => {
  const parts = line.trim().split(/\s+/);
  if (parts.length === 2) {
    column1.push(parts[0]);
    if (column2[parts[1]]) column2[parts[1]]++;
    else column2[parts[1]] = 1;
  }
});
column1.sort();

column1.forEach((element) => {
  n = column2[element] || 0;
  anwser += element * n;
});

// anwser: 18934359;
