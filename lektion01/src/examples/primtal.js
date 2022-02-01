function primeNumbers(to) {
    const list = []
    for (let i = 2; i <= to; i++) {
        if (isPrime(i)) {
            list.push(i)
        }
    }

    return list
}

function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true;
}

console.log(primeNumbers(20))
