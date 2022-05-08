function time15Minutes(input) {
    let hour = Number(input[0]);
    let minutes = Number(input[1]);
    let totalMinutes = hour * 60 + minutes + 15
    let h = Math.floor(totalMinutes / 60);
    let m = totalMinutes % 60;
    if (h > 23) {
        h = 0
    }
    if (m < 10) {
        console.log(`${h}:0${m}`)
    } else {
        console.log(`${h}:${m}`);
    }
}
time15Minutes(['1', '46'])