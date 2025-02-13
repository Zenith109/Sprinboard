/* Task 1: Track Animal Sightings */
// TODO: Write a function with rest parameters to print sightings of different animals within the sanctuary. This function should accept an arbitrary number of animal names.
function trackAnimalSightings(...animals) {
    console.log("Animal sightings within the sanctuary:");
    animals.forEach(animal => console.log(animal));
}

trackAnimalSightings("Lion", "Elephant", "Rhino", "Zebra");

/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];
// TODO: You are given two arrays of habitat names. Use the spread operator to combine them into a comprehensive list of protected areas within the sanctuary.
// Use the spread operator to combine them into a comprehensive list of protected areas within the sanctuary
const protectedAreas = [...forestHabitats, ...savannahHabitats];
console.log("Protected Areas:", protectedAreas);

/* Task 3: Update Conservation Status */
const rhinoStatus = {
	population: 500,
	status: "Endangered"
};
// TODO: You are given an object representing an animal's conservation status. Use the spread operator to update this status with new information, such as an increase in population or a change in habitat.
// Use the spread operator to update this status with new information
const updatedRhinoStatus = {
    ...rhinoStatus,
    population: 550, // Updated population
    habitat: "Grasslands" // New habitat information
};
console.log("Updated Rhino Status:", updatedRhinoStatus);

/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
	name: "Leo",
	age: 5,
	species: "Lion"
};
// TODO: Duplicate an animal profile object using a shallow copy. Add genetic diversity information using the `genetics` property to this copy. Observe and explain how changes to nested properties affect both the original and the copied object.
// Duplicate an animal profile object using a shallow copy and add genetic diversity information
const lionProfileWithGenetics = {
    ...lionProfile,
    genetics: {
        diversity: "High",
        markers: ["A", "B", "C"]
    }
};
console.log("Lion Profile with Genetics:", lionProfileWithGenetics);
/*
 * Observations:
 * TODO: Explain here.
 * * Changes to nested properties in the copied object will affect both the original and the copied object because the copy is shallow.
 * For example, if we modify `lionProfileWithGenetics.genetics.diversity`, it will also change `lionProfile.genetics.diversity`.
 */

/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
	waterQuality: "Good",
	foodSupply: {
		herbivores: "Abundant",
		carnivores: "Sufficient"
	}
};
// TODO: You are given an object with a nested structure detailing the ecosystem's health, including water quality and food supply. Perform a shallow copy and modify a nested property. Observe and explain how changes to nested properties affect both the original and the copied object.
// Perform a shallow copy and modify a nested property
const updatedEcosystemHealth = {
    ...ecosystemHealth,
    foodSupply: {
        ...ecosystemHealth.foodSupply,
        carnivores: "Scarce" // Modified nested property
    }
};
console.log("Updated Ecosystem Health:", updatedEcosystemHealth);

/*
 * Observations:
 * Changes to nested properties in the shallow copied object will not affect the original object if we create a new nested object.
 * For example, modifying `updatedEcosystemHealth.foodSupply.carnivores` does not change `ecosystemHealth.foodSupply.carnivores`.
 */