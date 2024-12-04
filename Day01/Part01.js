const readFile = require("../commons/readFile");

let anwser = 0;

const column1 = [];
const column2 = [];

const locations = readFile("Day01/input.txt").lines;

locations.forEach((line) => {
  const parts = line.trim().split(/\s+/);
  if (parts.length === 2) {
    column1.push(parts[0]);
    column2.push(parts[1]);
  }
});
column1.sort();
column2.sort();

column1.forEach((element, index) => {
  anwser += Math.abs(element - column2[index]);
});
console.log(anwser);
// anwser: 2378066;
