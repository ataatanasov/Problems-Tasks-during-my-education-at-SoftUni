function sumDigits(number) {
    let numberAsString = String(number);
    let result = 0;

    for (let i = 0; i < numberAsString.length; i++) {
        result += Number(numberAsString[i]);
    }

    console.log(result);
}
sumDigits(245678)
