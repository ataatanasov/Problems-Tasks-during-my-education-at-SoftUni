function equalSums(arr) {
    // sashtestvuva li element, koito da e raven na sbora na chislata ot dqsno
    // i na chislata ot lqvo. AKo li da, togava trqbva da se printira index-a;

    let hasEqualSum = false;
    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        
        for (let j = i - 1; j >= 0; j--) {
            leftSum += arr[j];
        }
        for (let k = i + 1; k < arr.length; k++) {
            rightSum += arr[k];
        }
        if (leftSum === rightSum) {
            hasEqualSum = true;
            console.log(i);
        }
        // i = 0 -> rightSum = 8
        // i = 1 -> left sum = 1; rightSum = 6
        // i = 2 -> leftSum = 3; rightSum = 3; Here we have found it!
        
    }
    if(!hasEqualSum) {
        console.log('no');
    }
}
equalSums([1, 2, 3, 3]);
equalSums([1, 2])