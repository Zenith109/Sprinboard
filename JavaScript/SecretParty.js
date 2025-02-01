const alphabet = "abcdefghijklmnopqrstuvwxyz"; // Define the alphabet string

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