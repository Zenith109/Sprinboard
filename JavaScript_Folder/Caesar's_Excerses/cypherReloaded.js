//You are given the below code:
const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";

//## Step 1 🧩Create a function named `encryptLetter` that takes a letter and a shift value as parameters. This function should return the encrypted version of the letter.
function encryptLetter(letter, shiftValue) {
  let letterIndex = alphabet.indexOf(letter);
  let encryptedIndex = (letterIndex + shiftValue) % 26;
  return alphabet[encryptedIndex];
}

//## Step 2 🧩Create a function named `encryptMessage` that takes a word and a shift value as parameters. This function should return the encrypted version of the entire word.
function encryptMessage(word, shiftValue) {
    let encryptedWord = "";
    for (let i = 0; i < word.length; i++) {
        encryptedWord += encryptLetter(word[i], shiftValue);
    }
    return encryptedWord;
    }

//## Step 3 🧩Create a function named `decryptLetter` that takes an encrypted letter and a shift value as parameters. This function should return the decrypted version of the letter.
function decryptLetter(letter, shiftValue) {
  let letterIndex = alphabet.indexOf(letter);
  let decryptedIndex = (letterIndex - shiftValue + 26) % 26;
  return alphabet[decryptedIndex];
}

//## Step 4 🧩Create a function named `decryptMessage` that takes an encrypted word and a shift value as parameters. This function should return the decrypted version of the entire word.
function decryptMessage(word, shiftValue) {
    let decryptedWord = "";
    for (let i = 0; i < word.length; i++) {
        decryptedWord += decryptLetter(word[i], shiftValue);
    }
    return decryptedWord;
    }

//## Question 🤔If Caesar encrypts the word "BRUTUS" using our `encryptMessage` function and then decrypts the result using our `decryptMessage` function, will he get "BRUTUS" back? Why or why not?
// Caesar will not get "BRUTUS" back because the shift value is 3. The encrypted version of "BRUTUS" is "EUXWXV". When Caesar decrypts "EUXWXV" using the shift value of 3, he will get "BRUTUS" back. 
