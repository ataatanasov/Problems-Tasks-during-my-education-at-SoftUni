function perfectNumber(number) {
    //ravno na sumata of its proper positive divisors
    sum = 1;
    for (let i = 2; i * i <= number; i++) {
       
        if (number % i === 0) {
            if (i * i != number) {
                sum = sum + i + number / i
            } else {
                sum = sum + i;
            }
        }
    }
    if (sum == number && number != 1) {
        console.log('We have a perfect number!');
    } else {
        console.log(`It's not so perfect.`);
    }
}
perfectNumber(6)
perfectNumber(28)
perfectNumber(1236498)
