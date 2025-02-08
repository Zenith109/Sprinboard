function mysteryOperation() {
	const outcome = Math.random(); // Generates a random number between 0 and 1.

	if (outcome < 0.5) {
		console.log("The operation is completed successfully!");
	} else {
		throw new Error("The operation has failed mysteriously!");
	}
}

let totalVacationDays = 0;
const missions = 20;

for (let i = 0; i < missions; i++) {
	try {
		mysteryOperation();
		totalVacationDays += 13; // Successful operation
	} catch (error) {
		totalVacationDays += 1; // Failed operation
	} finally {
		totalVacationDays += 3; // Attendance days
	}
}

console.log(`You deserve ${totalVacationDays} days of vacation!`);