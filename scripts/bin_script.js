const express = require('express'); // Import the express module
const fs = require('fs'); // Import the file system module
const path = require('path'); // Import the path module

const app = express(); // Create an instance of express
const filePath = path.join(__dirname, 'last_scanned_bin.txt'); // Define the path to the file that stores the last scanned bin ID

// Function to save the last scanned bin ID to a file
function saveLastScannedBin(binId) {
    fs.writeFileSync(filePath, binId); // Write the bin ID to the file
    console.log(`Bin ${binId} has been saved as the last scanned bin.`); // Log a message to the console
}

// Function to get the last scanned bin ID from the file
function getLastScannedBin() {
    if (fs.existsSync(filePath)) { // Check if the file exists
        const binId = fs.readFileSync(filePath, 'utf-8').trim(); // Read the bin ID from the file and trim any whitespace
        return binId; // Return the bin ID
    } else {
        return null; // Return null if the file does not exist
    }
}

// Define a route for the root URL
app.get('/', (req, res) => {
    const lastBin = getLastScannedBin(); // Get the last scanned bin ID
    const message = lastBin ? `The last scanned bin was: ${lastBin}` : 'No bin has been scanned yet.'; // Create a message based on whether a bin ID was found
    res.send(`<h1>${message}</h1>`); // Send the message as an HTML response
});

// Start the server and listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000'); // Log a message to the console
});