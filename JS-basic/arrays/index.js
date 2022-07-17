// Task-01

const fill = (arraySize, value) => {
    const arr = [];

    for (let i = 0; i < arraySize; i++) {
        arr.push(value);
    }

    return arr;
}

fill(5, 'test');

// Task-02

const reverseArray = (array) => {
    const reverseArray = [];

    array.forEach(item => {
        reverseArray.unshift(item);
    });

    return reverseArray;
}

reverseArray(['1', '2', '3'])

// Task-03

const mergeArrays = (firstArray, secondArray) => {
    const arrays = [...firstArray, ...secondArray];

    return [...new Set(arrays)].sort((firstNumber, secondNumber) => {
        return firstNumber - secondNumber
    })
}

mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]);