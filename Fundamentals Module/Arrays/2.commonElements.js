function commonElements(arr1, arr2) {
    // compare the two arrays;
    // print the matches on different lines;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            
            if (arr1[i] === arr2[j]) { // we use nested to check the arrays,
                console.log(arr1[i]);   // because they have different lengths.
            }  
        }
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']);
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l'])