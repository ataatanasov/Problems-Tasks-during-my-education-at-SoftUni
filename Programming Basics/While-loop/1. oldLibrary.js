function oldLibrary(input) {
    let index = 0;
    let favouriteBook = input[index];
    index++;
    let booksCounter = 1;
    let command = input[index];
    let bookIsFound = false

    while (command !== 'No More Books') {
        if (command === favouriteBook) {
            bookIsFound = true;
            break;
        }
        command = input[index];
        index++;   
        booksCounter++
    }
    if (bookIsFound === false) {
        console.log('The book you search is not here!');
        console.log(`You checked ${booksCounter - 2} books.`);

    } else {
        console.log(`You checked ${booksCounter - 2} books and found it.`)
    }
    

}
oldLibrary()








