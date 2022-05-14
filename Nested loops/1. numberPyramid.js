function numberPyramid(input) {
    let n = Number(input[0]);
    let current = 1;
    let isBigger = false;
    let printCurrentLine = '';

    for (let rows = 1; rows <= n; rows++) { // opredelq kolko reda shte se otpechatat
        for (let cols = 1; cols <= rows; cols++) { // kolko chisla se printirat na saotvetniya red
            if(current > n) {
                isBigger = true;
                break;
            }
            printCurrentLine += current + '';
            current++;
        } 
        console.log(printCurrentLine);
        printCurrentLine = '';
        if (isBigger) {
            break;
        }
    }
}
numberPyramid(['7'])