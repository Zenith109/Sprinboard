/* Task 1: Compile Participant Details with Shorthand Property Names */
// TODO: Construct an object named `participant` with properties for `name`, `age`, and `studyField`. Utilize shorthand property names to simplify your code.
const participant = {
    name: "John Doe",
    age: 25,
    studyField: "Computer Science",
    };

console.log('Participant: ${name}, ${age}, ${studyField}');

/* Task 2: Implement a Shorthand Function for Participant Info */
// TODO: Copy the `participant` object by adding a shorthand method named `displayInfo` that prints the participant's details using `this` and a template string.
const participant = {
    ...participant,
    displayInfo() {
        console.log('Participant: ${this.name}, ${this.age}, ${this.studyField}');
    },
};

participant.displayInfo();

/* Task 3: Implement a Same Shorthand Arrow Function for Participant Info */
// TODO: Echo the above task with an arrow function. Observe the behavior of `this` and explain your findings.
const participant = {
    ...participant,
    displayInfo: () => {
        console.log('Participant: ${this.name}, ${this.age}, ${this.studyField}');
    },
};

participantAnotherCopy.displayInfo();
/*
 * Observations:
 * the arrow function does not have its own `this` binding. It inherits the `this` value from the enclosing lexical context. In this case, the `this` value is the global object, which does not have the properties `name`, `age`, and `studyField`. Therefore, the arrow function logs `undefined` for each property.
 */

/* Task 4: Using Computed Property Names */
// TODO: Implement a function named `updateParticipantInfo` that takes a property name and value as arguments alongside an object and returns a new object with that property dynamically set.
function updateParticipantInfo(property, value, object) {
    return {
        ...object,
        [property]: value,
    };
}

const updatedParticipant = updateParticipantInfo(participant, "projectTitle", "JavaScript Objects");
console.log(updatedParticipant);