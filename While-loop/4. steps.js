function steps(input) {
    let index = 0;
    let command = input[index];
    index++

    let totalSteps = 0;
    let target = 10000;

    while (command !== 'Going home') {
        let steps = Number(command);
        totalSteps += steps;

        if (totalSteps >= target) { 
            let diff = Math.abs(totalSteps - target)
            console.log('Goal reached! Good job!');
            console.log(`${diff} steps over the goal!`)
            break;
        } // tuk nqma else, zashtoto ako go pishem, to nuzhnite stupki do izlizaneto na target-a shte izlizat v consolata

        command = input[index];
        index++;
    }

    if (command === 'Going home') {
        let steps = Number(input[index]); // tuk index e 6, zashtoto sa minali 5 iteracii v cikala
        index++ // // za da si vzemem tezi sled going home, tui kato cikulut e prikluchil
        totalSteps += steps;
        let diff = Math.abs(totalSteps - target)

        if (totalSteps >= target) {
            console.log(`Goal reached! Good job!`)
            console.log(`${diff} steps over the goal!`)
        } else {
            console.log(`${diff} more steps to reach goal.`)
        }
    }
}
steps()


