function hotelRoom(input) {
    let month = input[0];
    let nightsCount = Number(input[1]);
    let studioPrice = 0;
    let apartmentPrice = 0;
    let totalPrice = 0;

    if (month === 'May' || month === 'October') {
        studioPrice = nightsCount * 50;
        apartmentPrice = nightsCount * 65;
        if (nightsCount > 7) {
            studioPrice = studioPrice * 0.95;
        }
        if (nightsCount > 14) {
            studioPrice = (nightsCount * 50) * 0.70;
            apartmentPrice = apartmentPrice * 0.90;
        }

    } else if (month === 'June' || month === 'September') {
        studioPrice = nightsCount * 75.20;
        apartmentPrice = nightsCount * 68.70;
        if (nightsCount > 14) {
            studioPrice = studioPrice * 0.80;
            apartmentPrice = apartmentPrice * 0.90;
        }
    } else {
        studioPrice = nightsCount * 76;
        apartmentPrice = nightsCount * 77
        if (nightsCount > 14) {
            apartmentPrice = apartmentPrice * 0.90;
        }
    }
    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}
hotelRoom(["May",
    "15"])




