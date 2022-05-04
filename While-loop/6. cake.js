function cake(input) {
    let index = 0;
    let width = Number(input[index]);
    index++
    let length = Number(input[index]);
    index++;
    let cakeSize = width * length // broi parcheta
    let command = input[index];
    index++
    let isHaveCake = true

    while (command !== 'STOP') {
        let pieces = Number(command);
        cakeSize -= pieces;

        if(cakeSize < 0) {
            isHaveCake = false
            console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`);
            break;
        }   
        command = input[index];
        index++

    }
    if (isHaveCake) {
        console.log(`${Math.abs(cakeSize)} pieces are left.`)
    }
}
cake()


