function letterCount(word) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    // Check if the input is a string
    if (typeof word !== "string") {
        console.error("Error: Input is not a string");
        return;
    }

    // Check if the word contains only alphabetic characters
    for (const letter of word) {
        if (!alphabet.includes(letter.toLowerCase())) {
            console.error("Error: Word contains non-alphabetic characters");
            return;
        }
    }

    let letterCounts = {};

    // Count the occurrences of each letter in the word
    for (let letter of word) {
        let lowerCaseLetter = letter.toLowerCase();

        // If the letter is already in the dictionary, increment its count
        if (letterCounts[lowerCaseLetter] !== undefined) {
            letterCounts[lowerCaseLetter]++;
        } else {
            // Otherwise, initialize the count to 1
            letterCounts[lowerCaseLetter] = 1;
        }
    }

    return letterCounts;
}

// Test cases
console.log(letterCount("Caesar42")); // Should log an error
console.log(letterCount("Caesar"));   // Should log { c: 1, a: 2, e: 1, s: 1, r: 1 }
console.log(letterCount("AAbaBa"));   // Should log { a: 3, b: 2 }
