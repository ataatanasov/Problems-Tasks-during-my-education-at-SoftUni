function tennis(input) {
    let index = 0;
    let tournamentCount = Number(input[index]);
    index++;
    let startingPoints = Number(input[index]);
    index++;
    
    let tempPoints = 0; // 
    let winCount = 0; // we need this for the percentage 
    
    for(i = 0; i < tournamentCount; i++) {
        let result = input[index];
        index++
        switch(result) {
            case 'W':
                tempPoints += 2000;
                winCount++;
                break;
            case 'F': tempPoints += 1200; break;
            case 'SF': tempPoints += 720; break;
        }
              
    }
    let totalPoints = startingPoints + tempPoints; // za da ne poluchavame golyamo chislo, tova go vadim otvan.
    console.log(`Final points: ${totalPoints}`);
    let averagePoints = tempPoints / tournamentCount; // tuk e za turnir, a ne ot vsichkit obshto;
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    let winPercentage = (winCount / tournamentCount) * 100;
    console.log(`${winPercentage.toFixed(2)}%`)
}
tennis()


