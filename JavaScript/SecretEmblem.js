//You are given the below code:
const emblemClue1 = "Eagle";
const emblemClue2 = "Laurel";
const emblemClue3 = 7;

//## Step 1 🧩Use a series of `if`, `else if`, and `else` statements to decipher the first clue.
//If `emblemClue1` is "Eagle", the location starts with "Forum".
//If `emblemClue1` is "Lion", the location starts with "Colosseum".
//Otherwise, the location starts with "Villa".
let startingLocation =''; //initialize the starting location variable
if (emblemClue1 === "Eagle") {  //if Eagle, the location starts with Forum
  startingLocation = "Forum";       
} else if (emblemClue1 === "Lion") {    //if Eagle, the location starts with Forum
  startingLocation = "Colosseum";   
} else {    //if neither Eagle nor Lion, the location starts with Villa
  startingLocation = "Villa";   
} //use if, else if, and else statements to decipher the first clue.

//## Step 2 🧩Use boolean logic to decipher the second clue.
//If `emblemClue2` is "Laurel" AND the first location is "Forum", append " of Augustus" to the location.
//If `emblemClue2` is "Grapes" OR the first location is "Villa", append " of Pompey" to the location.
if (emblemClue2 === "Laurel" && startingLocation === "Forum") {    //if Laurel and Forum, append " of Augustus" to the location
  startingLocation += " of Augustus";   
} else if (emblemClue2 === "Grapes" || startingLocation === "Villa") {    //if Grapes or Villa, append " of Pompey" to the location
    startingLocation += " of Pompey";
} //use boolean logic to decipher the second clue.

//Step 3 🧩Use the switch statement to decipher the third clue.
//Depending on the value of `emblemClue3`, append a direction to the location.
//7 is "North"
//3 is "South"
//9 is "East"
//4 is "West"
switch (emblemClue3) {    //use the switch statement to decipher the third clue
    case 7:    //if 7, append "North" to the location
        startingLocation += " North";   
        break;
    case 3:    //if 3, append "South" to the location
        startingLocation += " South";   
        break;
    case 9:    //if 9, append "East" to the location
        startingLocation += " East";   
        break;
    case 4:    //if 4, append "West" to the location
        startingLocation += " West";   
        break;
    } //use the switch statement to decipher the third clue.

//## Question 🤔Why is it important to be careful when using `==` (double equals) instead of `===` (triple equals) in our conditionals?
// Answer: It is important to be careful when using `==` (double equals) instead of `===` (triple equals) in our conditionals because `==` performs type coercion, which can lead to unexpected results. Using `===` ensures strict equality, checking both value and type, which helps avoid potential bugs and unintended behavior in our code.
