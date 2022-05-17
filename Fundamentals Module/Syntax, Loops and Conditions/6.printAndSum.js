function printAndSum(startNum, endNum) {
    startNum = Number(startNum);
    endNum = Number(endNum);
    let line = '';
    let sum = 0;
    
    for (let i = startNum; i <= endNum; i++) {
        sum += i;
        line += i + ' ';
        // ako consol.log e tuk i ako e vav cikal, to shte gi napravi piramida - 5, 56, 567
        
    }
    console.log(line)
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);