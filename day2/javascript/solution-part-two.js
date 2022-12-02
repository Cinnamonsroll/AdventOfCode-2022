const {
    readFileSync
} = require("node:fs");
const input = readFileSync("../input.txt", "utf-8").split("\n");
let totalScore = 0;
const Shapes = {
        1: "A",
        2: "B",
        3: "C"
    },
    opposites = {
        "A": "C",
        "B": "A",
        "C": "B"
    }
const shapeScore = (move) => {
    for (let [score, shape] of Object.entries(Shapes)) {
        if (shape === move) return +score
    }
}
const winScore = (move) => {
  for (let [K, V] of Object.entries(opposites)) {
        if (V === move) return shapeScore(K)
    }
}
const getScore = (opponentMove, currentMove) => {
    switch (currentMove) {
        case "X":
            return shapeScore(opposites[opponentMove])
        case "Y":
            return shapeScore(opponentMove) + 3
        case "Z":
            return winScore(opponentMove) + 6
        default:
            return 0
    }
}

for (let i = 0; i < input.length; i++) {
    const line = input[i];
    if (!line) break;
    const [opponentMove, currentMove] = line.split(' ');
    totalScore += getScore(opponentMove, currentMove)
};
console.log(totalScore)
