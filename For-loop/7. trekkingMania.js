function trekkingMania(input) {
    let index = 0;
    let groupCount = Number(input[index]);
    index++;

    let totalPeople = 0;
    let musalaGroup = 0;
    let montblancGroup = 0;
    let kilimanjaroGroup = 0;
    let k2Group = 0;
    let everestGroup = 0;

    for(i = 0; i < groupCount; i++) {
        let countPeople = Number(input[index]); // tui kato nie izsledvame broya hora vav vsqka edna grup, tazi promenliva pazi broya v edna grupa;
        index++;
        totalPeople += countPeople // we need the total amount for each iteration
        if(countPeople <= 5){
            musalaGroup += countPeople;
        } else if(countPeople >= 6 && countPeople <=12) {
            montblancGroup += countPeople;
        } else if(countPeople >= 13 && countPeople <= 25) {
            kilimanjaroGroup += countPeople;
        } else if(countPeople >= 26 && countPeople <= 40) {
            k2Group += countPeople
        } else {
            everestGroup += countPeople
        }
    }
    let musalaGroupPercentage = (musalaGroup / totalPeople) * 100;
    let montblancGroupPercentage = (montblancGroup / totalPeople) * 100;
    let kilimanjaroGroupPercentage = (kilimanjaroGroup / totalPeople) * 100;
    let k2GroupPercentage = (k2Group / totalPeople) * 100;
    let everestGroupPercentage = (everestGroup / totalPeople) * 100;

    console.log(musalaGroupPercentage.toFixed(2) + '%');
    console.log(montblancGroupPercentage.toFixed(2) + '%');
    console.log(kilimanjaroGroupPercentage.toFixed(2) + '%');
    console.log(k2GroupPercentage.toFixed(2) + '%');
    console.log(everestGroupPercentage.toFixed(2) + '%');
}

trekkingMania()


