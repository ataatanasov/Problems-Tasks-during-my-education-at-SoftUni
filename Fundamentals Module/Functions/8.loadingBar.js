function loadingBar(number) {
    let arr = [];
    // vsqko chislo e kratno na 10;
    if (number == 10) {
        arr.push('%.........');
        console.log(`10% [${arr}]`);
        console.log('Still loading...');
    } else if (number == 20) {
        arr.push('%%........');
        console.log(`20% [${arr}]`);
        console.log('Still loading...')
    } else if (number == 30) {
        arr.push('%%%.......');
        console.log(`30% [${arr}]`)
        console.log('Still loading...');
    } else if (number == 40) {
        arr.push('%%%%......');
        console.log(`40% [${arr}]`);
        console.log('Still loading...');
    } else if (number == 50) {
        arr.push('%%%%%.....');
        console.log(`50% [${arr}]`);
        console.log('Still loading...');
    } else if (number == 60) {
        arr.push('%%%%%%....')
        console.log(`60% [${arr}]`);
        console.log('Still loading...');
    } else if (number == 70) {
        arr.push('%%%%%%%...');
        console.log(`70% [${arr}]`);
        console.log('Still loading...');
    } else if (number == 80) {
        arr.push('%%%%%%%%..');
        console.log(`80% [${arr}]`);
        console.log('Still loading...');
    } else if (number === 90) {
        arr.push('%%%%%%%%%.');
        console.log(`90% [${arr}]`);
        console.log('Still loading...');
    } else if (number == 100) {
        arr.push('%%%%%%%%%%');
        console.log('100% Complete!');
        console.log(`[${arr}]`);
    }
}
loadingBar(30);
