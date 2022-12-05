const {
  readFileSync
} = require("node:fs");
const input = readFileSync("./input.txt", "utf-8").split("\n")
const columns = [];
let columnsEnd = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] === '') {
    columnsEnd = i - 1;
    const end = parseInt(input[columnsEnd].trim().split(' ').slice(-1)[0], 10)
    for (let j = 0; j < end; j++) {
      columns.push([]);
    }
  }
}

for (let i = 0; i < columnsEnd; i++) {
  let currentColumn = 0;
  for (let j = 0; j < input[i].length; j += 4) {
    if (input[i].slice(j, j + 4).trim() === '') {
      currentColumn += 1;
    } else {
      columns[currentColumn].push(input[i].slice(j, j + 4).trim());
      currentColumn += 1;
    }
  }
}

for (let i = 0; i < columns.length; i++) {
  columns[i] = columns[i].reverse();
}

for (let i = columnsEnd; i < input.length; i++) {
  const matches = input[i].match(/move ([0-9]+) from ([0-9]+) to ([0-9]+)/);
  if (matches) {
    const steps = matches.slice(1).map(x => parseInt(x, 10));
    const temp = [];
    for (let _ = 0; _ < steps[0]; _++) {
      temp.push(columns[steps[1] - 1].pop());
    }
    columns[steps[2] - 1] = columns[steps[2] - 1].concat(temp.reverse());
  }
}

let result = '';
for (let i = 0; i < columns.length; i++) {
  result += columns[i][columns[i].length - 1].replace('[', '').replace(']', '');
}
console.log(result);
