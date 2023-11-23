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

    let isString = typeof creditCardArray === "string";
    if (creditCardArray[0] === "4") {
        return "Visa card"
    } else if (creditCardArray[0] === "5") {
        return "Mastercard"
    } else if (creditCardArray[0] === "6") {
        return "Discover card"
    } else if (creditCardArray[0][1] === "3", "4" || "7") {
        return "American Express"
    } else {
        return null;
    }
}

function creditCardValidator(text) {
    if (convertTextToNumberArray(text) != null) {
        const numbersArray = convertTextToNumberArray(text);
        if (isCreditCardLengthCorrect(numbersArray)) {
            return sumOfNumbers(addingDigitsOfDoubleDigitNumbers(doublingEveryOtherDigit(numbersArray)));
        } else
            return false
    } else
        return false
}


//UI Logic

function submitValidator(e) {
    e.preventDefault();
    const textInput = document.querySelector("input#creditCardNumber").value;
    const creditCard = creditCardValidator(textInput);
    const validating = validatingFirstDigitNumbers(textInput)

    document.getElementById("result").innerText = creditCard;
}


window.addEventListener("load", function () {
    document.getElementById("inputForm").addEventListener("submit", submitValidator);
})


// console.log(creditCardValidator("378282246310005"));
// console.log(creditCardValidator("371449635398431"));
// console.log(creditCardValidator("378734493671000"));
// console.log(creditCardValidator("5499740000000057"));
// console.log(creditCardValidator("5555555555554444"));
// console.log(creditCardValidator("5105105105105100"));

// console.log(creditCardValidator("6011000991001201"));
// console.log(creditCardValidator("6011111111111117"));
// console.log(creditCardValidator("6011000990139424"));

// console.log(creditCardValidator("4111111111111111"));
// console.log(creditCardValidator("4242424242424242"));
// console.log(creditCardValidator("4012888888881881"));
// console.log(creditCardValidator("7222222222222"));

// console.log(creditCardValidator("5105105105105100"));
// console.log(creditCardValidator("420a4070780465320"));


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



