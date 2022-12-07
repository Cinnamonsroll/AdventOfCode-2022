const {
  readFileSync
} = require("node:fs");
const input = readFileSync("../input.txt", "utf-8").split("\n");
const fileSystem = {};
let currentDirectory = [];
for (let line of input) {
  if (line.startsWith('$ cd ')) {
    const dir = line.slice(5);
    if (dir === '/') currentDirectory = [];
    else if (dir === '..') currentDirectory.pop();
    else currentDirectory.push(dir);
  } else if (!line.startsWith('$')) {
    const [size, name] = line.split(' ');
    const cd = currentDirectory.reduce((obj, d) => obj[d], fileSystem);
    cd[name] = size === 'dir' ? {} : +size;
  }
}
function calcSize(fs, totals = []) {
  const keys = Object.keys(fs);
  let total = 0;
  for (const key of keys) {
    if (Number.isInteger(fs[key])) total += fs[key];
    else total += calcSize(fs[key], totals)[0];
  }
  totals.unshift(total);
  return totals;
}

console.log(calcSize(fileSystem).filter(x => x <= 100000).reduce((a, b) => a + b))
