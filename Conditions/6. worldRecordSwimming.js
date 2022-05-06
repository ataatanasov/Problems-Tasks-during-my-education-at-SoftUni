function worldRecordSwimming(input) {
    let recordInSec = Number(input[0]);
    let distanceInMet = Number(input[1]);
    let timeInSecPerMet = Number(input[2]);

    let timeInSec = distanceInMet * timeInSecPerMet;

    let delay = Math.floor(distanceInMet / 15);
    let delayInSec = delay*12.5

    let totalTimeInSec = timeInSec + delayInSec;


    if (recordInSec > totalTimeInSec) {
        console.log(`Yes, he succeeded! The new world record is ${totalTimeInSec.toFixed(2)} seconds.`)
    } else {
        let diff = Math.abs(recordInSec - totalTimeInSec);
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
    }

}
worldRecordSwimming(["55555.67",
    "3017",
    "5.03"])


