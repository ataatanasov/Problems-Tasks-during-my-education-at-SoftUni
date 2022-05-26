function spiceMustFlow(startingYield) {
    startingYield = Number(startingYield);
    
    let minedSpice = 0;
    let dayCounter = 0;

    while (startingYield >= 100) {
        dayCounter++;
        minedSpice += startingYield;
        startingYield -= 10;
        minedSpice -= 26;
    }

    console.log(dayCounter);

    if (dayCounter !== 0) {
        console.log(minedSpice - 26)
    } else {
        console.log(minedSpice)
    }
}
spiceMustFlow(111)