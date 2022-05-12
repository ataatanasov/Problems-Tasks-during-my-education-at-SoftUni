function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermenCount = Number(input[2]);
    let price = 0;

    if (season === 'Spring') {
        price = 3000
        if (fishermenCount <= 6) {
            price = price * 0.9;
        } else if (fishermenCount >= 7 && fishermenCount <= 11) {
            price = price * 0.85;
        } else {
            price = price * 0.75
        }
    } else if (season === 'Summer' || season === 'Autumn') {
        price = 4200
        if (fishermenCount <= 6) {
            price = price * 0.9
        } else if (fishermenCount >= 7 && fishermenCount <= 11) {
            price = price * 0.85
        } else {
            price = price * 0.75
        }
    } else {
        price = 2600;
        if (fishermenCount <= 6) {
            price = price * 0.9
        } else if (fishermenCount >= 7 && fishermenCount <= 11) {
            price = price * 0.85
        } else {
            price = price * 0.75;
        }
    }
    if (fishermenCount % 2 === 0 && season !== 'Autumn') {
        price = price * 0.95
    }
    let diff = Math.abs(budget - price);
    if (budget >= price) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`)
    }
}
fishingBoat(["2000", 'Winter', '13'])



