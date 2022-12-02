const {
    readFileSync
} = require("node:fs");
const input = readFileSync("./input.txt", "utf-8").split("\n");
let totalScore = 0;
const Shapes = {
    1: ["A", "X"],
    2: ["B", "Y"],
    3: ["C", "Z"],
}
const shapeScore = (move) => {
    for (let [score, shapes] of Object.entries(Shapes)) {
        if (shapes.includes(move)) return score
    }
}
const calculateWin = (opponentMove, currentMove) => {
    const userScore = shapeScore(currentMove),
        otherScore = shapeScore(opponentMove),
        result = ((userScore - otherScore) + 3) % 3 === 1;
    let score = +userScore;
    if (userScore === otherScore) score += 3;
    else if (result) score += 6;
    return score
}

for (let i = 0; i < input.length; i++) {
    const line = input[i];
    if (!line) break;
    const [opponentMove, currentMove] = line.split(' ');
    totalScore += calculateWin(opponentMove, currentMove)
};
console.log(totalScore)
