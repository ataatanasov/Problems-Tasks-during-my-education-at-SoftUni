function oscars(input) { // this one is without a Boolean flag, apparently it works perfectly.
    let index = 0;
    let actor = input[index];
    index++;
    let academyPoints = Number(input[index]);
    index++;
    let juryCount = Number(input[index]);
    index++;
    let isNominated = false;

    for (i = 0; i < juryCount; i++) { // here for-loop works with both of the scenarios (i=0, i=1)
        let nameOfJury = input[index];
        index++;
        let juryPoints = Number(input[index]);
        index++;
        academyPoints += (nameOfJury.length * juryPoints) / 2
        
        if (academyPoints > 1250.5) {
            
            console.log(`Congratulations, ${actor} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
            break;
        }
    }
    if (academyPoints < 1250.5) {
        let diff = 1250.5 - academyPoints;
        console.log(`Sorry, ${actor} you need ${diff.toFixed(1)} more!`)
    }
}
oscars()




