function mysteryOperation() {
    // Generates a random number between 0 and 1.
    const outcome = Math.random();

    // If the outcome is less than 0.5, log success message.
    if (outcome < 0.5) {
        console.log("The operation is completed successfully!");
    } else {
        // Otherwise, throw an error indicating failure.
        throw new Error("The operation is failed mysteriously!");
    }
}

const numberOfOperations = 20; // Total number of operations to perform.

const daysOnSuccess = 13; // Days earned on successful operation.
const daysOnFailure = 1; // Days earned on failed operation.
const daysOnAttendance = 3; // Days earned for attendance.

let daysEarned = 0; // Initialize total days earned to 0.

// Loop through the number of operations.
for (let i = 0; i < numberOfOperations; i++) {
    try {
        // Attempt to perform the mystery operation.
        mysteryOperation();
        // If successful, add days earned on success.
        daysEarned += daysOnSuccess;
    } catch (error) {
        // If an error occurs, add days earned on failure.
        daysEarned += daysOnFailure;
    } finally {
        // Regardless of success or failure, add days earned for attendance.
        daysEarned += daysOnAttendance;
    }
}

// Log the total days earned.
console.log(daysEarned);
