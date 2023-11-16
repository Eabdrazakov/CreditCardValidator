function isCreditCardLengthCorrect(creditCardArray) {
    if (creditCardArray.length === 16 || creditCardArray.length === 15) {
        return true;
    } else {
        return false;
    }
}


function doublingEveryOtherDigit(creditCardArray) {
    let reversedArray = creditCardArray.reverse();
    let result = [];

    result = reversedArray.map(function (number, index) {
        if (index % 2 === 0) {
            return number * 2;
        } else {
            return number;
        }
    })
    return result.reverse();
}

const array1 = [4, 1, 0, 2, 0, 8, 0, 8, 8, 0, 4, 3, 5, 6, 2, 0];
console.log(doublingEveryOtherDigit(array1));


// const array = [4, 2, 0, 4, 0, 7, 0, 7, 8, 0, 4, 6, 5, 3, 5, 7]
// console.log(isCreditCardLengthCorrect(array));

