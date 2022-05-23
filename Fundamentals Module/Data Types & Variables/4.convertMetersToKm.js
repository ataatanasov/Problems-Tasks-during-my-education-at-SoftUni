function convertMetersToKm(meters) {
    meters = Number(meters);
    let convertor = meters / 1000;
    console.log(convertor.toFixed(2));
}
convertMetersToKm(1852);
convertMetersToKm(798);