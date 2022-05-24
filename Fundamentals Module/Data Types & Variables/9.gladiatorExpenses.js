function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    lostFightsCount = Number(lostFightsCount);
    helmetPrice = Number(helmetPrice);
    swordPrice = Number(swordPrice);
    shieldPrice = Number(shieldPrice);
    armorPrice = Number(armorPrice);
    let result = 0;
    // helmet na every second; helmet na every third; when they are broken
    // the shield breaks, and when it breaks for the second time
    // the armor breaks as well;
    // za da se schupqt i sword i helmet, te se chupqt na vsqka vtora i treta
    // toest na 2,4,6 se chupi helmet, a na 3-ta i 6-ta se chupi sword;
    // toest na 6 se chupqt i dvete => chupi se i shield
    // na vseki vtori put se chupi shield se chupi i armor (2 x 6 = 12)

    for (let currentBattle = 1; currentBattle <= lostFightsCount; currentBattle++) {
        
        if (currentBattle % 2 === 0) {
            result += helmetPrice
        }
        if (currentBattle % 3 === 0) {
            result += swordPrice; 
        }
        if (currentBattle % 6 === 0) {
            result += shieldPrice;
        }
        if (currentBattle % 12 === 0) {
            result += armorPrice;
        }
    }
    console.log(`Gladiator expenses: ${result.toFixed(2)} aureus`);
}
gladiatorExpenses(23, 12.50, 21.50, 40, 200)