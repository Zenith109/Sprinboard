// Question 1 Based on the story of Julius Caesar's secret party and the Caesar Cipher, identify potential variables you would need. Please ensure you use appropriate variable naming conventions in JavaScript.
// Answer: partyLocation
// shiftValue
// encryptedMessage
// decryptedMessage
//isPartySafe

//Question 2 After identifying the variables from the story, specify their primitive data types in JavaScript. Also, provide these variables with some initial values.
let partyLocation = "Garden"; //string
let shiftValue = 3; //number
let encryptedMessage = ""; //string
let decryptedMessage = ""; //string
let isPartySafe = true; //boolean

//Question 3 From the variables you've identified, determine which ones should be declared using const and which ones should use let.
let partyLocation = "Garden";  // place might change
const shiftValue = 3; // shift value should not change
let encryptedMessage = ""; // message might change as we may change locations 
let decryptedMessage = ""; // message might change as we may change locations as we decrypt
let isPartySafe = false; // boolean might change as we may change locations


//question 4  Given the variable shiftValue, write a piece of code to check if its value is an integer.
const shiftValue = 3;
Number.isInteger(shiftValue);