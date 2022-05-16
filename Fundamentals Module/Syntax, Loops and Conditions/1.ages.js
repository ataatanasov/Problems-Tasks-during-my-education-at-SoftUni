function ages(age) {

    let a = Number(age);
    if (a >= 0 && a <= 2) {
        console.log('baby');
    } else if (a >= 3 && age <= 13) {
        console.log('child');
    } else if (a >= 14 && a <= 19) {
        console.log('teenager');
    } else if (a >= 20 && a <= 65) {
        console.log('adult');
    } else if (age >= 65) {
        console.log('elder');
    } else {
        console.log('out of bounds')
    }
}
ages(20);
ages(1);
ages(65);
ages(-1);