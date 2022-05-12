function travel(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let price = 0;
    let destination;
    let placeOfStay;

    if (budget <= 100) {
        destination = 'Bulgaria';
        if (season === 'summer') {
            placeOfStay = 'Camp'
            price = budget * 0.30
        } else {
            placeOfStay = 'Hotel'
            price = budget * 0.70;
        }
    } else if (budget <= 1000) {
        destination = 'Balkans'
        if (season === 'summer') {
            placeOfStay = 'Camp'
            price = budget * 0.40
        } else {
            placeOfStay = 'Hotel'
            price = budget * 0.80
        }
    } else {
        destination = 'Europe'
        placeOfStay = 'Hotel'
        if (season === 'summer' || 'winter') {
            price = budget * 0.90;
        }
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${placeOfStay} - ${price.toFixed(2)}`);
}
travel(["1500", "summer"])