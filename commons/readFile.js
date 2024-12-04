const readFile = (file) => {
  const fs = require("fs");
  const path = require("path");
  const data = fs.readFileSync(path.join(__dirname, `../${file}`), "utf8");
  const lines = data.split("\n").slice(0, -1);
  return { lines, data };
};

module.exports = readFile;
