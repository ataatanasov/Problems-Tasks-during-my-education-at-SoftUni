function sumSeconds(input) {
    let timeFirst = Number(input[0]);
    let timeSecond = Number(input[1]);
    let timeThird = Number(input[2]);

    let totalTime = timeFirst + timeSecond + timeThird;
    let mins = Math.floor(totalTime / 60);
    let secs = totalTime % 60;

    if(secs < 10){
        console.log(`${mins}:0${secs}`);
    }else{
        console.log(`${mins}:${secs}`);
    }
}
sumSeconds(["35",
"45",
"44"])

