//You are given the below code.
const friend = "BRUTUS"
const shiftValue = 3;

//## Step 1 🧩 Store the Latin alphabet in a variable with all letters in lowercase.
const alphabet = 'abcdefghijklmnopqrstuvwxyz'; //store the Latin alphabet in a variable with all letters in lowercase.

//## Step 2 🧩 Find the index of the first letter of Ceaser's friend. Store it in a variable. 
const friendIndex = alphabet.indexOf(friend[0].toLowerCase()); //find the index of the first letter of Caesar's friend and store it in a variable. 

//## Step 3 🧩 Use the Caesar Cipher technique to shift the first letter of Caesar's friend by the given shift value, which is 3 positions. Find and store the encrypted letter in a variable.
const encryptedLetter = alphabet[(friendIndex + shiftValue) % alphabet.length]; // shorthand for if the index is greater than the length of the alphabet, it wraps around

//## Step 4 🧩 Determine the length of the alphabet.
const alphabetLength = alphabet.length; // length of the alphabet is 26 

//## Step 5 🧩 Use the Caesar Cipher technique to shift the first letter of Caesar's friend by the given shift value, ensuring the shift wraps around the alphabet if it exceeds.
const encryptedLetterWrap = alphabet[(friendIndex + shiftValue) % alphabetLength]; //Again shorthand way to wrap around the alphabet if the shift exceeds the length of the alphabet 

//## Step 6 🧩 Caesar remembers that Brutus is particularly fond of challenges. Before sending the encrypted message, Caesar decides to send only a part of it as a teaser. Extract the first 3 characters from the encrypted message using the `slice` method. (Assume that the encrypted message is "EUXWXV".)
const teaser = encryptedLetterWrap + encryptedLetterWrap + encryptedLetterWrap; //shorthand way to get the first 3 characters of the encrypted message using the slice method 