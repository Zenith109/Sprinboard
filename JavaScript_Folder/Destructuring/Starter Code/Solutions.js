/* Task 1: Unveiling the Coordinates */
const coordinates = {x: 34, y: 42, z: 67};
// TODO: Destructo has found a map with coordinates marked on it. Use object destructuring to extract the `x` and `y` coordinates from the given `coordinates` object. Print the coordinates.
const {x, y} = coordinates;
console.log('Coordinates found: x=${x}, y=${y}');
/* Task 2: The Map of Secrets */
const locations = {
	first: "Cave of Wonders",
	second: "Lake of Mystery",
	third: "Mount of Ages",
	fourth: "Desert of Shadows"
};
// TODO: The map reveals several locations, but only the first two are significant for the quest. Use object destructuring with the rest parameter to isolate the `first` and `second` locations from the `locations` object, capturing the rest in a variable called `remaining`. Print the key locations.
//this is shorthand for const first = locations.first; const second = locations.second; const remaining = {third: locations.third, fourth: locations.fourth};
const {first, second, ...remaining} = locations;
console.log('Key locations: ${first}, ${second}');
/* Task 3: The Mysterious Door */
const doorCode = {
	upper: "Alpha",
	lower: "Omega"
};
// TODO: To open the Mysterious Door, a sequence is required, which might be incomplete. Use object destructuring to assign default values to ensure the door opens even if part of the code is missing. Make sure the `middle` defaults to one of the values from the `remaining` variable above if not provided. Print the door code sequence.
//again shorthand for const upper = doorCode.upper; const lower = doorCode.lower; const middle = doorCode.middle || remaining.third;
const {upper, lower, middle = remaining.third} = doorCode;
console.log('Door code sequence: ${upper}, ${middle}, ${lower}');
/* Task 4: The Guardian's Riddle */
const riddle = {
	ancientWord: "Sphinx",
	modernWord: "Cat"
};
// TODO: The guardian of an ancient library speaks in riddles. Use object destructuring to rename `ancientWord` to `translation` in the `riddle` object. Print the translation of the riddle.
const {ancientWord: translation, modernWord} = riddle;
console.log('The riddle translation: ${translation}');
/* Task 5: The Array of Elements */
const elements = ["Fire", "Water", "Earth", "Air"];
// TODO: Inside the library, Destructo discovers an array that represents the elements needed to decipher the next clue. Use array destructuring to extract the first two elements. Print the essential elements.
const [firstElement, secondElement] = elements;
console.log('Essential elements: ${firstElement}, ${secondElement}');
/* Task 6: Skipping Stones */
const stones = [1, 2, 3, 4, 5, 6];
// TODO: Crossing the River of Reflections requires skipping certain stones. Use array destructuring to extract only the first and the sixth stones. Print the extracted stones.
const [firstStone, , , , , sixthStone] = stones;
console.log('Extracted stones: ${firstStone}, ${sixthStone}');
/* Task 7: The Array of Shadows */
const shadows = ["Darkness", "Silence", "Whisper", "Echo"];
// TODO: The Cave of Shadows hides more than it reveals. Use array destructuring with the rest parameter to separate the visible shadow (which is the first) from the hidden ones. Print the visible shadow and the hidden shadows.
const [visibleShadow, ...hiddenShadows] = shadows;
console.log('Visible shadow: ${visible}, Hidden shadows: ${hiddenShadows.join(', ')}');
/* Task 8: The Wise Function */
// TODO: Destructo needs to decode ancient directions to continue his quest. Help him by writing a function `revealPath` that decodes and prints the direction and distance to travel. The function takes an object with `direction` and `distance` as parameters.
function revealPath({direction, distance}) {
    console.log('Head ${direction} for ${distance} leagues');
}
revealPath({direction: 'North', distance: 5});
/* Task 9: The Scroll of Defaults */
// TODO: Destructo finds an ancient scroll with a potion recipe, but some ingredients are missing. Write a function `mixPotion` that uses defaults "Water" and "Fireflower" for `ingredient1` and `ingredient2` if they are not specified and print those mixings. The function takes an object with these optional properties.
function mixPotion({ingredient1 = 'Water', ingredient2 = 'Fireflower'} = {}) {
    console.log('Mix ${ingredient1} with ${ingredient2}');
}
mixPotion({ingredient1: 'Milk'});
/* Task 10: The Array Spell */
// TODO: At the gates of an ancient library, Destructo must cast a spell with the first two ingredients from a list given to him by a wise owl. Create a function `castSpell` that uses array destructuring to access these ingredients from an array and print the spell casting.
function castSpell([ingredient1, ingredient2]) {
    console.log('Cast spell with ${ingredient1} and ${ingredient2}');
}
castSpell(['Eye of Newt', 'Wing of Bat', 'Tooth of Wolf']);
/* Task 11: The Nested Secret */
const nestedSecret = {outer: {inner: "The Final Key"}};
// TODO: Behind the final door lies a nested artifact containing the ultimate clue. Use nested destructuring to extract `The Final Key`. Print the unveiled secret.
const {outer: {inner: finalKey}} = nestedSecret;
console.log('The final key: ${finalKey}');
/* Task 12: The Swap of Fate */
let stoneA = "Emerald";
let stoneB = "Ruby";
// TODO: In the treasure chamber, two mystical stones control the treasure's safeguard. Use array destructuring to swap the values of `stoneA` and `stoneB`. Print the result of the swap.
[stoneA, stoneB] = [stoneB, stoneA];
console.log('Swapped stones: ${stoneA}, ${stoneB}');