//Given the initial array of guests:
const guests = ["ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"];

//## Step 1 🧩Caesar remembers he forgot to add his best friend "BRUTUS" to the list. Add him to the beginning of the list.
guests.unshift("BRUTUS"); // Adds "BRUTUS" to the beginning of the array

//## Question 1 🤔How can you verify that "BRUTUS" was added to the beginning of the array?
console.log(guests);    // Output: ["BRUTUS", "ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"]

//## Step 2 🧩A herald announced the arrival of "AUGUSTUS" and "LUCIA". Add them to the end of the guest list.
guests.push("AUGUSTUS", "LUCIA");   // Adds "AUGUSTUS" and "LUCIA" to the end of the array

//## Step 3 🧩Caesar is curious. He wants to know if "SPARTACUS" has been invited. Check if he's on the list and find out at which position.
const spartacusIndex = guests.indexOf("SPARTACUS"); // Returns -1 because "SPARTACUS" is not in the array

//## Question 2 🤔What would the value of `spartacusIndex` be if "SPARTACUS" wasn't invited?
console.log(spartacusIndex);    // Output: -1

//## Step 4 🧩Oops! Caesar just received a message that "CASSIUS" won't be able to make it. Remove him from the list.
guests.splice(guests.indexOf("CASSIUS"), 1); // Removes "CASSIUS" from the array using splice method with index of "CASSIUS" and 1 as the number of elements to remove (shorthand)

//## Step 5 🧩Caesar wants to send a special invite to the first three guests on the list. Extract these names into a new array.
const specialGuests = guests.slice(0, 3); // Extracts the first three elements from the array using slice method with start index 0 and end index 3

//## Step 6 🧩Caesar decides he wants the guest list in alphabetical order. Sort the array. However, Caesar wants his most honored guest (the one added first) to remain at the top of the list. Can you think of a way to sort the guests but keep the honored ones at the top?
const honoredGuests = guests.slice(0, 2); // Extracts the first two elements from the array
const regularGuests = guests.slice(2); // Extracts the rest of the elements from the array
regularGuests.sort(); // Sorts the regular guests in alphabetical order
const sortedGuests = honoredGuests.concat(regularGuests); // Combines the honored guests with the sorted regular guests
//this one could have been done in one line as well like this: const sortedGuests = guests.slice(0, 2).concat(guests.slice(2).sort());

