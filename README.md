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



