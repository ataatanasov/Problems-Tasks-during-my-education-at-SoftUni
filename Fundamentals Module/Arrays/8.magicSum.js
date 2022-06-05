function magicSum(arr, magicNum) {
    // print all unique pairs in an array, whose sum is equal to the magicNum;
    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            let nextElement = arr[j];
            let sum = currentElement + nextElement;
            if (sum === magicNum) {
                console.log(`${currentElement} ${nextElement}`);
            }
        }
    }
}
magicSum([1, 7, 6, 2, 19, 23], 8)