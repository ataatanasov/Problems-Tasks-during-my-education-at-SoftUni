function toyShop(input) {
    let tripPrice = Number(input[0]);
    let puzzelCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let teddysCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let price = puzzelCount * 2.60 + dollsCount * 3 +
        teddysCount * 4.10 + minionsCount * 8.20 +
        trucksCount * 2;
    let toysCount = puzzelCount + dollsCount +
        teddysCount + minionsCount + trucksCount;

    
    if (toysCount >= 50) {
        price = price * 0.75;

    }
    price = price * 0.9;
    let diff = Math.abs(price - tripPrice)
    if(price >= tripPrice){
        console.log(`Yes! ${diff.toFixed(2)} lv left.`)
    }else{
        
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
    }
    

}
toyShop((["40.8",
"20",
"25",
"30",
"50",
"10"])
)