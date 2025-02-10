//## Step 1 🧩Generate a decimal number between 0 (inclusive) and 1 (exclusive) using JavaScript's `Math` functions.
const decimalNumber = Math.random(); //generate a decimal number between 0 (inclusive) and 1 (exclusive) using JavaScript's Math functions.

//## Step 2 🧩Determine the desired range of numbers for our secret shift value, which is between 3 and 33.
const min = 3;
const max = 33;

//## Question 1 🤔Why did we add 1 to the difference between 33 and 3?
// Answer: We added 1 to the difference between 33 and 3 to include the maximum value of 33 in the range. Since the Math.random() function generates a number between 0 and 1, we need to adjust the range to include the maximum value.

//## Step 3 🧩Using the random decimal number generated in Step 1, adjust its value to fit within the desired range determined in Step 2.
const secretShiftValue = Math.floor(decimalNumber * (max - min + 1) + min); //using the random decimal number generated in Step 1, adjust its value to fit within the desired range determined in Step 2.

//## Question 2 🤔How does multiplying `randomDecimal` by `range` help us get a number within our desired range?
// Answer: Multiplying the random decimal number by the range (difference between max and min values) helps scale the random decimal number to fit within the desired range. By adding the minimum value, we shift the scaled number to fall within the specified range.

//## Step 4 🧩 Round down the decimal number obtained in Step 3 to get a whole integer.
const secretShiftValueRounded = Math.floor(secretShiftValue); //round down the decimal number obtained in Step 3 to get a whole integer.

//## Question 3 🤔Why do we use the `Math.floor()` function instead of other rounding methods like `Math.round()`?
// Answer: We use the Math.floor() function instead of other rounding methods like Math.round() because we want to ensure the secret shift value is rounded down to the nearest whole integer. This ensures that the shift value remains within the specified range.

//## Step 5 🧩Adjust the integer obtained in Step 4 to fit within the range of 3 to 33, inclusive.
const adjustedShiftValue = Math.max(min, Math.min(secretShiftValueRounded, max)); //adjust the integer obtained in Step 4 to fit within the range of 3 to 33, inclusive.

//## Question 4 🤔How does adding 3 to `randomInt` ensure that our final `shiftValue` is between 3 and 33?
// Answer: Adding 3 to `randomInt` ensures that our final `shiftValue` is between 3 and 33 by shifting the adjusted integer to start from 3. This adjustment guarantees that the shift value falls within the specified range, even if the initial random number was close to 0.

