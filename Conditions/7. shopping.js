function shopping(input) {
    let budget = Number(input[0]);
    let gpuCount = Number(input[1]);
    let cpuCount = Number(input[2]);
    let ramCount = Number(input[3]);
    let gpuPrice = gpuCount * 250;
    let cpuPricePerOne = gpuPrice * 0.35;
    let cpuPrice = cpuCount * cpuPricePerOne;
    let ramPricePerOne = gpuPrice * 0.1
    let ramPrice = ramCount * ramPricePerOne;
    let totalPrice = gpuPrice + cpuPrice + ramPrice;

    if (gpuCount >= cpuCount) {
        totalPrice = totalPrice * 0.85;
    }
    let diff = Math.abs(budget - totalPrice);

    if (budget >= totalPrice) {
        console.log(`You have ${diff.toFixed(2)} leva left!`);

    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);
    }

}
shopping(["920.45",
"3",
"1",
"1"])
