function terningeKast() {
    const randomNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1
    const randomWait = Math.floor(Math.random() * 2000) + 1

    return new Promise((resolve) => {
        setTimeout(() => resolve(randomNumber), randomWait)
    })
}

function toEnsTerninger() {
    return new Promise(async resolve => {
        const firstThrow = await terningeKast()
        const secondThrow = await terningeKast()
        resolve(firstThrow === secondThrow)
    })
}

function fordeling(antal) {
    return new Promise(async resolve => {

        const throws = Array.from({length: antal}, () => terningeKast())

        const values = await Promise.all(throws)
        const mappedToCount = mapValuesToCount(values)
        const mappedToDistribution = mapCountToPercentage(mappedToCount, antal)

        resolve(mappedToDistribution)
    })
}

function mapValuesToCount(values) {
    const map = new Map()

    values.forEach((value) => {
        if (map.has(value)) {
            map.set(value, map.get(value) + 1)
        } else {
            map.set(value, 1)
        }
    })

    return map
}

function mapCountToPercentage(countMap, totalSize) {
    const map = new Map()

    countMap.forEach(((value, key) => {
        const percentageOfTotal = value / totalSize * 100
        const rounded = percentageOfTotal.toFixed(2)
        map.set(key, rounded)
    }))

    return map
}

terningeKast().then(die => console.log("die", die))

toEnsTerninger().then(isSame => console.log("isSame", isSame))

fordeling(6).then(res => console.log("fordeling: ", res))