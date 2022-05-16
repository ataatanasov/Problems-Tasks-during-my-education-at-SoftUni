function examPreparation(input) {
    let index = 0;
    let unsatisfactoryGrades = Number(input[index]);
    index++;
    let command = input[index];
    index++
    let sumGrade = 0;
    let counterTasks = 0;
    let avgscore = 0;
    let unsatisfactoryGradesCounter = 0;
    let lastProblem = '';
    isNeedBreak = false;
    
    while (command !== 'Enough') {
        let task = command;
        lastProblem = task // taka shte ostane ot poslednata iteraciq
        let grade = Number(input[index]);
        index++
        counterTasks++;
        sumGrade += grade
        if (grade <= 4) {
            unsatisfactoryGradesCounter++;
        }
        if (unsatisfactoryGradesCounter === unsatisfactoryGrades) {
            isNeedBreak = true
            console.log(`You need a break, ${unsatisfactoryGradesCounter} poor grades.`);
            break;
        }
        command = input[index];
        index++
    }
    if (!isNeedBreak){
        avgscore = sumGrade / counterTasks;
        console.log(`Average score: ${avgscore.toFixed(2)}`);
        console.log(`Number of problems: ${counterTasks}`);
        console.log(`Last problem: ${lastProblem}`)
    }
    
}
examPreparation()




