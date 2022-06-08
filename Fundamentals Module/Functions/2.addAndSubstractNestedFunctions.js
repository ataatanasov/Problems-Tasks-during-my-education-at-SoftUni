function addAndSubstract(num1, num2, num3) {
    function add(num1, num2) {
        return num1 + num2;
    }

    let substract = (addResult, thirdNumber) => addResult - thirdNumber;
    let result = add(num1, num2);
    let finalResult = substract(result, num3);
    console.log(finalResult);
}
addAndSubstract(23, 6, 10)