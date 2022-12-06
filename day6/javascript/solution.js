const {
  readFileSync
} = require("node:fs");
const input = readFileSync("./input.txt", "utf-8")
for (let i = 0; i < input.length - 4; i++) {
  const content = input.substring(i, i + 4);
  if (new Set(content).size === 4) {
    console.log(i + 4);
    break;
  }
}
