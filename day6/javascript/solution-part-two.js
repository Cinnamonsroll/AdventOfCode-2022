const {
  readFileSync
} = require("node:fs");
const input = readFileSync("./input.txt", "utf-8")
for (let i = 0; i < input.length - 14; i++) {
  const content = input.substring(i, i + 14);
  if (new Set(content).size === 14) {
    console.log(i + 14);
    break;
  }
}
