function oddAndEvenSum(number) {
    number = number.toString();
    let evenSum = 0;
    let oddSum = 0;
    
    for (let i = 0; i < number.length; i++) {
        number[i] = Number(number[i]);
        if (number[i] % 2 === 0) {
            evenSum += Number(number[i]);
        } else {
            oddSum += Number(number[i]);
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435)