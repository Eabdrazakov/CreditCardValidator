function isCreditCardLengthCorrect(creditCardArray) {
    if (creditCardArray.length === 16 || creditCardArray.length === 15) {
        return true;
    } else {
        return false;
    }
}

const array = [4, 2, 0, 4, 0, 7, 0, 7, 8, 0, 4, 6, 5, 3, 5, 7]

console.log(isCreditCardLengthCorrect(array));

