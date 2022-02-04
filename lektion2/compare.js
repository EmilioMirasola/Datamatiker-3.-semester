function compare(s1, s2) {
    if (s1 < s2) {
        return -1;
    }
    if (s1 === s2) {
        return 0;
    }

    return 1;
}

function compareLen(s1, s2) {
    return s1.length - s2.length;
}

function compareIgnoreCase(s1, s2) {
    return compare(s1.toLowerCase(), s2.toLowerCase());
}

function bubbleSort(array, comparatorFunction) {
    for (let i = array.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (comparatorFunction(array[j], array[j + 1]) > 0) {
                swap(j)
            }
        }
    }

    function swap(j) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
    }
}

console.log(compare("1", "1"))
console.log(compareLen("Emilio", "Mirasola"))
console.log(compareIgnoreCase("emilio", "EMILIO"))

const arr = [2, 6, 1, 7, 5];
bubbleSort(arr, compare)

console.log(arr);