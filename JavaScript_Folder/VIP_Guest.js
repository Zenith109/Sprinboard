//Start with this initial guest directory:
const guests = {
    ANTONY: {
    title: "General",
    region: "Rome",
    dietaryPreference: "Vegetarian",
    pastGifts: ["Golden Laurel", "Chariot"]
    },
    CICERO: {
      title: "Orator",
      region: "Arpinum",
      dietaryPreference: "Omnivore",
      pastGifts: ["Scroll of Proverbs", "Quill"]
    }
  };

  //## Step 1 🧩Add "BRUTUS" to the guest directory. He's a "Senator" from "Rome", prefers "Vegan" food, and in the past, he has gifted Caesar a "Silver Dagger" and a "Marble Bust".
guests.BRUTUS = {
    title: 'Senator',
    region: 'Rome',
    dietaryPreference: 'Vegan',
    pastGifts: ['Silver Dagger', 'Marble Bust']
    };

//## Step 2 🧩Update CICERO's past gifts to include a "Golden Lyre".
guests.CICERO.pastGifts.push('Golden Lyre');

//## Step 3 🧩 Retrieve the region of "ANTONY".
const antonyRegion = guests.ANTONY.region;

//## Step 4 🧩 Due to unforeseen political events, "CICERO" needs to be discreetly removed from the guest list.
delete guests.CICERO;

//## Step 5 🧩 Assign ANTONY's profile to a new variable named `generalProfile`. Then, using this new variable, change the `region` of ANTONY to "Egypt".
const generalProfile = guests.ANTONY;
generalProfile.region = 'Egypt';

//Question 1 🤔 After executing Step 5, what will be the region of ANTONY in the original guests object?
// Egypt this is due to in step 5 we assigned Antony as generalProfile and then changed the region of generalProfile to Egypt. Since generalProfile is a reference to Antony, the region of Antony will also be Egypt.