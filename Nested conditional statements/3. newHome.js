function newHome(input) {
    let flowerType = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);
    let totalCost = 0;
    switch (flowerType) {
        case 'Roses':
            totalCost = flowerCount * 5;
            if (flowerCount > 80) {
                totalCost = totalCost * 0.90
            }
            break;
        case 'Dahlias':
            totalCost = flowerCount * 3.80;
            if (flowerCount > 90) {
                totalCost = totalCost * 0.85;
            }
            break;
        case 'Tulips':
            totalCost = flowerCount * 2.80;
            if (flowerCount > 80) {
                totalCost = totalCost * 0.85;
            }
            break;
        case 'Narcissus':
            totalCost = flowerCount * 3;
            if (flowerCount < 120) {
                totalCost = totalCost * 1.15;
            }
            break;
        case 'Gladiolus':
            totalCost = flowerCount * 2.50;
            if (flowerCount < 80) {
                totalCost = totalCost * 1.20;
            }
            break;

    }
    let diff = Math.abs(budget - totalCost);
    if (budget >= totalCost) {
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
    }
}
newHome(["Gladiolus",
    "64",
    "160"])




