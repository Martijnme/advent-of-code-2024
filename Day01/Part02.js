const readFile = require("../commons/readFile");

let ans = 0;

const col1 = [];
const col2 = {};

const locations = readFile("Day01/input.txt").lines;

locations.forEach((line) => {
  const parts = line.trim().split(/\s+/);
  if (parts.length === 2) {
    col1.push(parts[0]);
    if (col2[parts[1]]) col2[parts[1]]++;
    else col2[parts[1]] = 1;
  }
});
col1.sort();

col1.forEach((elm) => {
  n = col2[elm] || 0;
  ans += elm * n;
});

// anwser: 18934359;
