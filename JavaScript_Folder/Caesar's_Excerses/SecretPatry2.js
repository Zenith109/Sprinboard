const alphabet = "abcdefghijklmnopqrstuvwxyz"; // Define the alphabet string

// Function to encrypt a message
function encrypt(message, shiftValue) {
    let encryptedMessage = ""; // Initialize the encrypted message as an empty string
    const alphabetLength = alphabet.length; // Get the length of the alphabet

    for (let i = 0; i < message.length; i++) {
        const char = message[i]; // Get the current character from the message
        const isLetter = alphabet.includes(char.toLowerCase()); // Check if the character is a letter

        if (isLetter) {
            const isUpperCase = char === char.toUpperCase(); // Check if the character is uppercase
            const baseChar = isUpperCase ? 'A' : 'a'; // Set the base character for ASCII calculation
            const shiftDirection = (i % 2 === 0) ? 1 : -1; // Alternate shift direction
            const shiftedChar = String.fromCharCode(
                ((char.charCodeAt(0) - baseChar.charCodeAt(0) + (shiftValue * shiftDirection) + alphabetLength) % alphabetLength) + baseChar.charCodeAt(0)
            ); // Calculate the shifted character
            encryptedMessage += shiftedChar; // Append the shifted character to the encrypted message
        } else {
            encryptedMessage += char; // If not a letter, append the original character
        }

        // Insert a random letter from the alphabet after every two letters
        if ((i + 1) % 2 === 0) {
            const randomLetter = alphabet[Math.floor(Math.random() * alphabetLength)]; // Get a random letter from the alphabet
            encryptedMessage += randomLetter; // Append the random letter to the encrypted message
        }
    }

    return encryptedMessage; // Return the final encrypted message
}

// Function to decrypt a message
function decrypt(encryptedMessage, shiftValue) {
    let decryptedMessage = ""; // Initialize the decrypted message as an empty string
    const alphabetLength = alphabet.length; // Get the length of the alphabet
    let skipNext = false; // Flag to skip the next character (random letter)

    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
        if (skipNext) {
            skipNext = false; // Reset the flag
            continue; // Skip the random letter
        }

        const char = encryptedMessage[i]; // Get the current character from the encrypted message
        const isLetter = alphabet.includes(char.toLowerCase()); // Check if the character is a letter

        if (isLetter) {
            const isUpperCase = char === char.toUpperCase(); // Check if the character is uppercase
            const baseChar = isUpperCase ? 'A' : 'a'; // Set the base character for ASCII calculation
            const shiftDirection = (j % 2 === 0) ? 1 : -1; // Alternate shift direction
            const shiftedChar = String.fromCharCode(
                ((char.charCodeAt(0) - baseChar.charCodeAt(0) - (shiftValue * shiftDirection) + alphabetLength) % alphabetLength) + baseChar.charCodeAt(0)
            ); // Calculate the shifted character
            decryptedMessage += shiftedChar; // Append the shifted character to the decrypted message
            j++; // Increment the letter counter

            // Set the flag to skip the next character (random letter)
            if (j % 2 === 0) {
                skipNext = true;
            }
        } else {
            decryptedMessage += char; // If not a letter, append the original character
        }
    }

    return decryptedMessage; // Return the final decrypted message
}

// Decrypt the provided secret message using a shift value of 42
const secretMessage = "Iueuan jrxuq cjythdykwxaj mixkqtaeml ebv wHenckvbkei rqdmt fHukckvi.r Jbxuihus, tmxayiwfuxh sjxau amenhtv 'zQkhhuubyjkit' yjew jhxux mxydatij. zJxmu hvymhihj ajel kldlsuyjb dyju yid uekdh qIbkqsxa xsxqqdvduzb wuqzhdoi qjxwu waueo xjem jfxuy dpuntj dgkvuiwj.";
const decryptedMessage = decrypt(secretMessage, 42);
console.log(decryptedMessage); // Print the decrypted message