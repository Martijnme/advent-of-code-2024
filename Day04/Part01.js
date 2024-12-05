const readFile = require("../commons/readFile");
const lines = readFile("Day04/input.txt").lines;

const directions = {
  up: [-1, 0],
  down: [1, 0],
  left: [0, -1],
  right: [0, 1],
  upLeft: [-1, -1],
  upRight: [-1, 1],
  downLeft: [1, -1],
  downRight: [1, 1],
};

const countOccurrences = (lines, target) => {
  let count = 0;
  for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
      if (lines[i][j] !== target[0]) continue;
      for (const key in directions) {
        let [x, y] = directions[key];
        let row = i + x;
        let col = j + y;
        let wordLength = 1;
        while (
          row >= 0 &&
          row < lines.length &&
          col >= 0 &&
          col < lines[i].length &&
          wordLength < target.length
        ) {
          if (lines[row][col] !== target[wordLength]) break;

          wordLength++;
          row += x;
          col += y;
        }
        if (wordLength === target.length) count++;
      }
    }
  }
  return count;
};

console.log(countOccurrences(lines, "XMAS"));
