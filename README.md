Describe: isCreditCardLengthCorrect()

Test: "It should return true if length of array 16  digits"
Code: isCreditCardLengthCorrect();
const: textArray = [4, 2, 0, 4, 0, 7, 0, 7, 8, 0, 4, 6, 5, 3,2,0];
creditCardLength(textArray);
Expected Output: true

Test: "It should return true if length of array  15 digits"
Code: isCreditCardLengthCorrect();
const: textArray = [4, 2, 0, 4, 0, 7, 0, 7, 8, 0, 4, 6, 5, 3, 2];
creditCardLength(textArray);
Expected Output: true

Test: "It should return false if length of array less then 15 digits"
Code: isCreditCardLengthCorrect();
const: textArray = [4, 2, 0, 4, 0, 7, 0, 7, 8, 0, 4, 6, 5, 3,];
creditCardLength(textArray);
Expected Output: false

Test: "It should return false if length of array more then 17 digits"
Code: isCreditCardLengthCorrect();
const: textArray = [4, 2, 0, 4, 0, 7, 0, 7, 8, 0, 4, 6, 5, 3, 2, 0, 7];
creditCardLength(textArray);
Expected Output: false

Descride: doublingEveryOtherDigit()

Test: "It should double every second element from the end of Array"
Code:  doublingEveryOtherDigit()
const: textArray = [4, 1, 0, 2, 0, 8, 0, 8, 8, 0, 4, 3, 5, 6, 2, 0];
creditCardLength(textArray);
Expected Output: [4, 2, 0, 4, 0, 16, 0, 16, 8, 0, 4, 6, 5, 12, 2, 0]


Describe: addingDigitsOfDoubleDigitNumbers()

Test: "Every 2 digits number should be added together each digit of the double digit number"
Code:  doublingEveryOtherDigit()
const:  textArray =[18, 10, 11, 12, 13, 8, 0, 8, 8, 0, 4, 3, 5, 6, 2]; 
creditCardLength(textArray);
Expected Output: [9, 1, 2, 3, 4, 8, 0, 8, 8, 0, 4, 3, 5, 6, 2]