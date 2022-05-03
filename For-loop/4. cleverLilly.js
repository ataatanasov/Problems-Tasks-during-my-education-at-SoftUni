function cleverLilly(input){
    let age = Number(input[0]);
    let washingmachinePrice = Number(input[1]);
    let pricePerToy = Number(input[2]);

    let toyCount = 0;
    let money = 0;
    let accruedMoney = 10;

    for (i = 1; i <= age; i++){
        if (i % 2 === 0) {
            money += accruedMoney;
            accruedMoney += 10;
            money -= 1;
        } else {
            toyCount++;
        }
    }
    let totalMoney = toyCount * pricePerToy + money;
    let diff = Math.abs(washingmachinePrice - totalMoney);

    if (totalMoney >= washingmachinePrice) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`);
    }

}
cleverLilly()

