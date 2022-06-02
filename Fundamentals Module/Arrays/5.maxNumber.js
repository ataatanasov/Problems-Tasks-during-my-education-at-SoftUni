function maxNumber(arr) {
    // find all top Integers in an array, a top integer is an integer,
    // which is bigger than the elements to its right
    
    let topInteger = []; // tuk si zapazvame kraqniq rezultat;
    
    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i] // we are taking the current element
        let isTop = true
        for (let j = i + 1; j < arr.length; j++) {
            let nextElement = arr[j];

            if (currentElement <= nextElement) {
                isTop = false
                break;
            }

        }
        if (isTop) {
            topInteger.push(currentElement);
        }
    }
    console.log(topInteger.join(' '));
}
maxNumber([27, 19, 42, 2, 13, 45, 48])