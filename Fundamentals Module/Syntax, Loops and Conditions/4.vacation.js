function vacation(peopleCount, type, day) {
   
    let studentPriceFriday = 8.45;
    let studentPriceSaturday = 9.80;
    let studentPriceSunday = 10.46;
    let businessPriceFriday = 10.90;
    let businessPriceSaturday = 15.60;
    let businessPriceSunday = 16;
    let regularPriceFriday = 15;
    let regularPriceSaturday = 20;
    let regularPriceSunday = 22.50;
    number = Number(peopleCount);

    let totalPrice = 0;

    if (type === 'Business' && peopleCount >= 100) {
        peopleCount -= 10;
    }

    if (type === 'Students' && day === 'Friday') {
        totalPrice = studentPriceFriday * peopleCount;
    } else if (type === 'Students' && day === 'Saturday') {
        totalPrice = studentPriceSaturday * peopleCount;
    } else if (type === 'Students' && day === 'Sunday') {
        totalPrice = studentPriceSunday * peopleCount;
    } else if (type === 'Business' && day === 'Friday') {
        totalPrice = businessPriceFriday * peopleCount;
    } else if (type === 'Business' && day === 'Saturday') {
        totalPrice = businessPriceSaturday * peopleCount;
    } else if (type === 'Business' && day === 'Sunday') {
        totalPrice = businessPriceSunday * peopleCount;
    } else if (type === 'Regular' && day === 'Friday') {
        totalPrice = regularPriceFriday * peopleCount;
    } else if (type === 'Regular' && day === 'Saturday') {
        totalPrice = regularPriceSaturday * peopleCount;
    } else if (type === 'Regular' && day === 'Sunday') {
        totalPrice = regularPriceSunday * peopleCount;
    }

    if (type === 'Students' && peopleCount >= 30) {
        totalPrice = totalPrice * 0.85;
    }
    if (type === 'Regular' && peopleCount >= 10 && peopleCount <= 20) {
        totalPrice = totalPrice * 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(100, 'Business', 'Friday')