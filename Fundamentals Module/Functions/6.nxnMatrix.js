function nxnMatrix(number) {
    let sum = ' ';
    let counter = 0;
    for (let i = 0; i < number; i++) {
        counter++
        sum += number + ' ';
        if (counter == number) {
            for (let j = 0; j < number; j++) {
                console.log(sum)
            }
        }
    }
}
nxnMatrix(7)