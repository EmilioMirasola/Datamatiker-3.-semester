// (remember to mention line breaks)
//line break after return is interpreted as ;
const list = [7, 13, 9, 8, 4, 1, 2, 16, 0]; // array definition

function bubbleSort(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (array[j] > array[j + 1]) {
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

bubbleSort(list)
console.log(list);


let i = -1
let searchNum = 7
for (const index in list) {
    if (list[index] === searchNum) {
        i = index
        break
    }
}

console.log(i);


const listString = ["c", "b", "a"]; // array definition

// double loop with for
for (let i = listString.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
        if (listString[j] > listString[j + 1]) {
            let temp = listString[j];
            listString[j] = listString[j + 1];
            listString[j + 1] = temp;
        }
    }
}
console.log(listString) // =>