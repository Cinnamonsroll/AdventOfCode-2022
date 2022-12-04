const {
  readFileSync
} = require("node:fs");
const input = readFileSync("./input.txt", "utf-8").match(/(\w+(\n)?){3}/g);

let priority = 0;
const getPriority = (char) => {
  const l = 'a'.charCodeAt(0) - 1;
  const u = 'A'.charCodeAt(0) - 27;
  const aV = char.charCodeAt(0);
  return aV - (aV < l ? u : l)
};
const matchingCharacter = (str1, str2, str3) => {
  for (let i in str1) if (str2.includes(str1[i]) && str3.includes(str1[i])) return str1[i]
}
for (const rucksuck of input) {
  if (!rucksuck) break;
  const lines = rucksuck.split("\n").filter(Boolean);
  priority += getPriority(matchingCharacter(...lines))
}
console.log(priority)
