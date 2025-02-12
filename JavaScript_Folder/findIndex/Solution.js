const mythicalCreatures = [
    {name: "Dragon", type: "Fire", lastSeen: "Volcano Valley"},
    {name: "Mermaid", type: "Water", lastSeen: "Coral Caves"},
    {name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest"},
    {name: "Griffin", type: "Air", lastSeen: "Highwind Mountains"},
    {name: "Kraken", type: "Water", lastSeen: "Abyssal Depths"}
];

// Use the find method to locate the first creature of the "Water" type and log its name to the console
const firstWaterCreature = mythicalCreatures.find(creature => creature.type === "Water");
console.log(firstWaterCreature.name); // Output: Mermaid

// Use the findIndex method to locate the index of the "Griffin" in the mythical creatures array and log it to the console
const griffinIndex = mythicalCreatures.findIndex(creature => creature.name === "Griffin");
console.log(griffinIndex); // Output: 3

// Use the find method to locate the first creature last seen in "Enchanted Forest"
const enchantedForestCreature = mythicalCreatures.find(creature => creature.lastSeen === "Enchanted Forest");
console.log(enchantedForestCreature.name); // Output: Unicorn
