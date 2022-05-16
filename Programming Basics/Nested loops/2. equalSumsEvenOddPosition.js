function equalSumsEvenOddPosition(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let printLine = ''

    for (let i = n1; i <= n2; i++) { // преминаваме през всички числа
        let currentNum = '' + i;
        let oddSum = 0;
        let evenSum = 0;
        for (let j = 0; j < currentNum.length; j++) { // обхождаме всяка цифра от числото
            let currentDigit = Number(currentNum.charAt(j));
            if (j % 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }
        if(oddSum === evenSum) {
            printLine += `${i} `;
        }
    }
    console.log(printLine)
}
equalSumsEvenOddPosition(["100000","100050"])
