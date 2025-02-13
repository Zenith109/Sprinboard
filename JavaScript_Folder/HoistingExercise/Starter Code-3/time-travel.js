/* Task 1: Declare a Destination Variable */
// TODO: Use `let` to declare a variable named `destination` and assign it the value `"Ancient Egypt"`. Print the destination to the console.
let destination = "Ancient Egypt";
console.log('destination: ${destination}');

/* Task 2: Change the Destination */
// TODO: Now, change the `destination` variable to `"Medieval Europe"`. Print the new destination to the console.
destination = "Medieval Europe";
console.log('New destination:, ${destination}');

/* Task 3: Declare a Constant Travel Date */
// TODO: Use `const` to declare a variable named `travelDate` and set it to `"2024-03-15"`. Try to change the `travelDate` to another value and observe and explain what happens as a comment.
const travelDate = "2024-03-15";
console.log('travelDate: ${travelDate}');
// travelDate = "2025-01-01"; // This will cause an error because `travelDate` is a constant and cannot be reassigned.
/*
 * Observations:
 * Trying to reassign a value to `travelDate` will result in a TypeError because `const` variables cannot be reassigned after their initial assignment.
 */

/* Task 4: Experiment with Variable Hoisting */
// TODO: Before declaring any variable, try to print a variable named `timeMachineModel` to the console. Then, declare `timeMachineModel` using `var` and assign it the value `"T-800"`. Observe and explain what happens as a comment.
console.log(timeMachineModel); // This will print `undefined` because of hoisting.
var timeMachineModel = "T-800";
console.log(timeMachineModel); // This will print `T-800`.
//or this will work also 
console.log('timeMachineModel: ${timeMachineModel}');
var timeMachineModel = "T-800";
/*
 * Observations:
 * When trying to print `timeMachineModel` before its declaration, it prints `undefined` due to hoisting. In JavaScript, variable declarations using `var` are hoisted to the top of their scope, but their assignments are not. Therefore, the variable exists but is not yet assigned a value.
*/
