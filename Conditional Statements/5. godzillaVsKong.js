function godzillaVsKong(input){
    let budget = Number(input[0]);
    let extraCount = Number(input[1]);
    let clothingPrice = Number(input[2]);

    let decor = 0.1 * budget;
    let totalClothingPrice = clothingPrice*extraCount

    if(extraCount > 150){
        totalClothingPrice = totalClothingPrice * 0.9;
    }
    let totalPrice = totalClothingPrice + decor
    let diff = Math.abs(totalPrice - budget);

    if(budget >= totalPrice){
        console.log('Action!');
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);

    }else{
        console.log('Not enough money!');
        console.log(`Wingard needs ${diff.toFixed(2)} leva more. `);
    }
}
godzillaVsKong(["20000",
"120",
"55.5"])


