const { readFileSync } = require("node:fs");
const input = readFileSync("./input.txt", "utf-8").split("\n");
const final = [];
for (let i = 0, a = []; i < input.length; i++) {
  const line = input[i];
  if (!line) final.push(a.reduce((a, b) => a + b, 0)), a = []
  else a.push(+line)
}
console.log(final.sort((a, b) => b - a).slice(0, 3).reduce((a, b) => a + b, 0))
