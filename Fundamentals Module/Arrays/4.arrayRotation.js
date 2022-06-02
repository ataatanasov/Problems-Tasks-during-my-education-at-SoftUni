function arrayRotation(arr, rotation) {
    // an array and number of rotations we have to perform;
    // depending on the number of rotations, the first element goes to the end;

    for (let i = 0; i < rotation; i++) {
        let currentNum = arr.shift(); // premahva parviq element i go zapazva
        arr.push(currentNum);         // dobavq vzetiq element ot masiva na kraya
    }
    console.log(arr.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2)