function trainTheTrainers(input) {
    let index = 0;
    let juryCount = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let sumGrade = 0; // ocenki za vsqka prezentaciya
    let counter = 0; // broi kolko sa prezentaciite

    while (command !== 'Finish') {
        let presentationName = command;
        let tempSumGrade = 0; // sumira ocenki za tekushta prezentaciya
        counter++;

        for (let i = 0; i < juryCount; i++) { // minava prez hora ot juri i chete negovata ocenka
            let tempGrade = Number(input[index]); // suhranqvame ocenkata ot vseki edin ot jurito
            index++
            tempSumGrade += tempGrade
        }
        let tempAvgGrade = tempSumGrade / juryCount; // sreden uspeh za tekushta prezentaciya
        sumGrade += tempAvgGrade // suma ot ocenka ot vsichki prezentacii
        console.log(`${presentationName} - ${tempAvgGrade.toFixed(2)}.`)
        command = input[index];
        index++
    }
    let avgGrade = sumGrade / counter;
    console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`)
}
trainTheTrainers(["2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"])
