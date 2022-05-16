function lunchBreak(input){
    let nameSeries = input[0];
    let durationSeries = Number(input[1]);
    let durationBreak = Number(input[2]);

    let lunchTime = durationBreak / 8;
    let restTime = durationBreak / 4;
    let timeToWatch = durationBreak - (lunchTime + restTime);
    let diff = Math.abs(durationSeries - timeToWatch);

    if(timeToWatch >= durationSeries){
        console.log(`You have enough time to watch ${nameSeries} and left with ${Math.ceil(diff)} minutes free time.`);

    }else{
        console.log(`You don't have enough time to watch ${nameSeries}, you need ${Math.ceil(diff)} more minutes.`)
    }

}
lunchBreak(["Teen Wolf",
"48",
"60"])
d
