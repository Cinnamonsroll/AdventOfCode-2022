Shapes = {
    1: ["A", "X"],
    2: ["B", "Y"],
    3: ["C", "Z"],
}
def shapeScore(move):
    for score, shapes in Shapes.items():
        if move in shapes:
            return int(score)
def calculateWin(opponentMove, currentMove):
    userScore = shapeScore(currentMove)
    otherScore = shapeScore(opponentMove)
    score = userScore
    result = ((userScore - otherScore) + 3) % 3 == 1
    if userScore == otherScore:
      return score + 3
    elif result:
      return score + 6
    else:
      return score
with open('../input.txt', 'r') as handle:
    text = handle.read().splitlines()
    i = 0
    length = len(text)
    totalScore = 0
    while i < length:
        line = text[i]
        [opponentMove, currentMove] = line.split()
        if not line:
            break
        else:
            totalScore += calculateWin(opponentMove, currentMove)
        i += 1
    print(totalScore)
