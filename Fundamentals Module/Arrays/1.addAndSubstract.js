function addAndSubstract(arr) {
    let newArray = [];
    let sumOfOriginalArray = 0;
    let sumOfModifiedArray = 0;

    for (let j = 0; j < arr.length; j++) {
        sumOfOriginalArray += arr[j];
    }
    
    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] % 2 === 0) {
            arr[i] += Number([i]);
        } else {
            arr[i] -= Number([i]); // ili arr[i] = i, toest na chisloto;
        }
        newArray.push(arr[i])
        sumOfModifiedArray += Number(arr[i]);
    }
    console.log(newArray);
    console.log(sumOfOriginalArray);
    console.log(sumOfModifiedArray)
}
addAndSubstract([5, 15, 23, 56, 35]);