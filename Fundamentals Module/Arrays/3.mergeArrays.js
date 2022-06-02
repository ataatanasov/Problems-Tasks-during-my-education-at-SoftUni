function mergeArrays(arr1, arr2) {
    // merge the two arrays
    //if the index is even, add into the third array the sum of both elements 
    //at that index;
    // if the index is odd, add the concatenation of both elements
    // 1 for loop is enough because both the arrays have the same length;

    let resultArray = [];

    for (let i = 0; i < arr1.length; i++) {
        
        if (i % 2 === 0) {
            resultArray.push(Number(arr1[i]) + Number(arr2[i]));
        } else {
            resultArray.push(`${arr1[i]}${arr2[i]}`);
        }
    }
    console.log(resultArray.join(' - '))
}
mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11'])