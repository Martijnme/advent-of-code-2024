const readFile = require("../commons/readFile");
const lines = readFile("Day04/input.txt").lines;

const directions = [
  [-1, -1, 1, 1], // Top-left to bottom-right
  [-1, 1, 1, -1], // Top-right to bottom-left
];

const isMASPattern = (grid, row, col, target) => {
  let diagonalMatch = 0;
  for (const key in directions) {
    const [topX, topY, bottomX, bottomY] = directions[key];
    let topRow = row + topX;
    let topCol = col + topY;
    let bottomRow = row + bottomX;
    let bottomCol = col + bottomY;
    while (
      topRow >= 0 &&
      topRow < grid.length &&
      topCol >= 0 &&
      topCol < grid[row].length &&
      bottomRow >= 0 &&
      bottomRow < grid.length &&
      bottomCol >= 0 &&
      bottomCol < grid[row].length &&
      diagonalMatch < 2
    ) {
      if (
        (grid[topRow][topCol] === target[0] &&
          grid[bottomRow][bottomCol] === target[2]) ||
        (grid[topRow][topCol] === target[2] &&
          grid[bottomRow][bottomCol] === target[0])
      ) {
        diagonalMatch++;
      }
      break;
    }
  }
  return diagonalMatch === 2;
};

const countCrossOccurrences = (grid, target) => {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] !== target[1]) continue;
      if (isMASPattern(grid, i, j, target)) count++;
    }
  }
  return count;
};

console.log(countCrossOccurrences(lines, "MAS"));
