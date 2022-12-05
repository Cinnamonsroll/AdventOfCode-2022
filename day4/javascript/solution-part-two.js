const {
  readFileSync
} = require("node:fs");
const input = readFileSync("./input.txt", "utf-8").split("\n");
let total = 0;
function calculateScore(lines) {
  for (let i = 0; i < lines.length; i++) {
    if (!lines[i]) break
    const [firstRange, secondRange] = lines[i].split(",").map(x => x.split("-").map(y => +y));
    if ((firstRange[0] <= secondRange[0] && firstRange[1] >= secondRange[0]) ||
    (secondRange[0] <= firstRange[0] && secondRange[1] >= firstRange[0])) total += 1
  }
}
calculateScore(input);
console.log(total);
