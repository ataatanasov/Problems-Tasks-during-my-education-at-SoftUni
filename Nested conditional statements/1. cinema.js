function cinema(input) {
    let projectionType = input[0];
    let row = Number(input[1]);
    let column = Number(input[2]);

    let income = 0;
    if (projectionType === 'Premiere') {
        income = (row * column) * 12;
    } else if (projectionType === 'Normal') {
        income = (row * column) * 7.50;
    } else if (projectionType === 'Discount') {
        income = (row * column) * 5;
    }
    console.log(`${income.toFixed(2)} leva`);
}
cinema(["Discount",
    "12",
    "30"])

