function vacation(input) {
    let index = 0;
    let neededMoney = Number(input[index]);
    index++;
    let money = Number(input[index]);
    index++;
    let totalSpendDay = 0;
    let totalDay = 0;

    while (money < neededMoney) {
        let command = input[index];
        index++
        let tempMoney = Number(input[index]); 
        index++
        totalDay++;

        switch (command) {
            case 'save': 
                money += tempMoney;
                totalSpendDay = 0;
                break;
            case 'spend': 
                money -= tempMoney;
                totalSpendDay++;
                if(money < 0) {
                    money = 0;
                }
            
        }
        if(totalSpendDay === 5) {
            console.log(`You can't save the money.`);
            console.log(totalDay);
            break;
        }
    }

    if (money >= neededMoney) {
        console.log(`You saved the money for ${totalDay} days.`)
    }

}
vacation()

