function convertTextToNumberArray(text) {
    let nonNumericRegex = /\D/;
    let isString = typeof text === 'string';
    if (isString && text.length > 0 && !nonNumericRegex.test(text)) {
        let splittingArray = text.split("");
        let resultArray = splittingArray.map(function (element) {
            return parseInt(element);
        });
        return resultArray;
    } else {
        return null;
    }
}


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
        if (index % 2 === 1) {
            return number * 2;
        } else {
            return number;
        }
    })
    return result.reverse();
}

function addingDigitsOfDoubleDigitNumbers(creditCardArray) {
    let resultArray = [];
    resultArray = creditCardArray.map(function (element) {
        if (element > 9) {
            let str = element.toString();
            num1 = parseInt(str[0]);
            num2 = parseInt(str[1]);
            return num1 + num2;
        }
        else
            return element;
    })
    return resultArray;
}


function sumOfNumbers(creditCardArray) {
    let sum = 0;

    creditCardArray.forEach(function (number) {
        sum += number;
    })
    if (sum % 10 === 0) {
        return true;
    } else {
        return false;
    }
}

function validatingFirstDigitNumbers(creditCardArray) {
    if (creditCardArray[0] === "4") {
        return "Visa card"
    } else if (creditCardArray[0] === "5") {
        return "Mastercard"
    } else if (creditCardArray[0] === "6") {
        return "Discover card"
    } else if (creditCardArray[0] === "3") {
        return "American Express"
    } else {
        return null;
    }
}



// const array = "4, 1, 0, 2, 0, 8, 0, 8, 8, 0, 4, 3, 5, 6, 2, 0";
// console.log(validatingFirstDigitNumbers(array));

// const array1 = "5, 1, 0, 2, 0, 8, 0, 8, 8, 0, 4, 3, 5, 6, 2, 0";
// console.log(validatingFirstDigitNumbers(array1));

// const array2 = "6, 1, 0, 2, 0, 8, 0, 8, 8, 0, 4, 3, 5, 6, 2, 0";
// console.log(validatingFirstDigitNumbers(array2));

// const array3 = "3, 7, 0, 2, 0, 8, 0, 8, 8, 0, 4, 3, 5, 6, 2";
// console.log(validatingFirstDigitNumbers(array3));

// const inputTextTest1 = "4204070780465320";
// console.log(convertTextToNumberArray(inputTextTest1));

// const inputTextTest2 = "42a04070780465320";
// console.log(convertTextToNumberArray(inputTextTest2));

// const inputTextTest3 = "";
// console.log(convertTextToNumberArray(inputTextTest3));



