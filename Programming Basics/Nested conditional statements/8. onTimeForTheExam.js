function onTimeForTheExam(input) {
    let hourExam = Number(input[0]);
    let minutesExam = Number(input[1]);
    let hourArrival = Number(input[2]);
    let minutesArrival = Number(input[3]);

    let examTime = hourExam * 60 + minutesExam;
    let arrivalTime = hourArrival * 60 + minutesArrival;

    if (arrivalTime > examTime) {
        console.log('Late')
        let diff = Math.abs(arrivalTime - examTime);
        let h = Math.floor(diff / 60);
        let m = diff % 60
        if (h >= 1) {
            if (m < 10) {
                console.log(`${h}:0${m} hours after the start.`)
            } else {
                console.log(`${h}:${m} hours after the start.`)
            }
        } else {
            console.log(`${m} minutes after the start.`)
        }
    } else if (arrivalTime === examTime || examTime - arrivalTime <= 30) {
        console.log('On time')
        let diff = Math.abs(arrivalTime - examTime);
        if (diff !== 0) {
            let m = diff % 60
            console.log(`${m} minutes before the start.`)
        }
    } else {
        console.log(`Early`)
        let diff = Math.abs(examTime - arrivalTime);
        let h = Math.floor(diff / 60);
        let m = diff % 60;
        if (h >= 1) {
            if (m < 10) {
                console.log(`${h}:0${m} hours before the start`);
            } else {
                console.log(`${h}:${m} hours before the start.`);
            }
        } else {
            console.log(`${m} minutes before the start`)
        }
    }
}
onTimeForTheExam(["10",
    "00",
    "10",
    "00"])

