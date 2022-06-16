function palindromeIntegers(arr) {
    
    for (let i = 0; i < arr.length; i++) {
        let number = arr[i];
        let reversedNumber = arr[i].toString().split('').reverse().join('');
        if (number == reversedNumber) {
            console.log('true');
        } else {
            console.log('false')
        }
    }
}
palindromeIntegers([123, 323, 421, 121])