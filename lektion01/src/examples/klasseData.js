const data = [
    [2, 70, 1],
    [1.5, 8, 2],
    [1, 1, 2],
    [2.1, 2.5, 1],
    [1.94, 39, 2],
    [2.1, 25, 1],
    [1.94, 39, 2],
    [2.11, 68, 1],
    [2.5, 75, 1],
    [2.0, 25, 1],
    [1.87, 23, 3],
    [0.15, 100, 1],
    [0.14, 14, 1],
    [1.79, 26, 1],
    [1.90, 18, 1],
    [2.1, 24, 1],
    [1.75, 25, 1],
    [1.90, 30, 1],
    [1.98, 20, 1],
    [1.60, 87, 1],
    [1.68, 24, 2],
]

function aveHeightGender(gender) {
    let occurences = 0;
    let sum = 0

    for (const person of data) {
        if (person[2] === gender) {
            occurences++
            sum += person[0]
        }
    }

    return [occurences, sum / occurences];
}

const [occurencesMen, averageMen] = aveHeightGender(1)
console.log("Men height ave: " + averageMen, "occurences: " + occurencesMen)

const [occurencesWomen, averageWomen] = aveHeightGender(2)
console.log("Women height ave: " + averageWomen, "occurences: " + occurencesWomen)

const [occurencesNonB, averageNonB] = aveHeightGender(3)
console.log("NonB height ave: " + averageNonB, "occurences: " + occurencesNonB)