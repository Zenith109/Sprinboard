//You are given the below code.
const friend = "BRUTUS"
const shiftValue = 3;

//## Step 1 🧩Recall the Latin alphabet variable from the previous exercise.
const latinAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Latin alphabet variable from the previous exercise 

//## Step 2 🧩Use a loop to iterate through each letter of "BRUTUS". Employ the Caesar Cipher technique to shift each letter by the given value. Store the encrypted name in a variable.
let encryptedName = ""; // Store the encrypted name
for (let i = 0; i < friend.length; i++) { // Iterate through each letter of "BRUTUS"
  const letter = friend[i]; // Get the current letter
  const letterIndex = latinAlphabet.indexOf(letter); // Get the index of the current letter
  const shiftedIndex = (letterIndex + shiftValue) % latinAlphabet.length; // Shift the index by the given value
  encryptedName += latinAlphabet[shiftedIndex]; // Add the shifted letter to the encrypted name
}


//## Question 1 🤔What advantage does using a loop provide over manually encrypting each letter?
// Answer: Using a loop allows you to automate the encryption process and handle strings of varying lengths without repeating the encryption logic for each letter.

//## Question 2 🤔Explain the role of `% alphabet.length` in our loop. How does it aid in the encryption process?
// Answer: The `% alphabet.length` operation ensures that the shifted index wraps around to the beginning of the alphabet if it exceeds the alphabet's length. This aids in creating a circular shift for the Caesar Cipher encryption.