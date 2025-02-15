/*Not gonna Lie this one was a brain teaser, I had to go through the code multiple times to understand it. 
I have added comments to the code to understand it better. and had to get ride of all the old/ TODO comments to make it look clean.
I have also added a few comments to make the code more readable. as you would do in a real project.*/

/* resourced used to understand the code:
youtube: https://www.youtube.com/watch?v=BpK2Kc7Fg9Q&list=PL_4RxtD-BL5vnqTh3YXwLkap_P4oW-MSy
tryHackMe: https://help.tryhackme.com/en/articles/6498330-enterprise-api
Codecademy: https://www.codecademy.com/resources/blog/learn-apis-with-codecademy/
GitHub: https://github.com/Kesline/Jeopardy-Assessment
*/ 

const API_URL = "https://rithm-jeopardy.herokuapp.com/api"; // The URL of the API.
const NUMBER_OF_CATEGORIES = 6; // The number of categories you will be fetching. You can change this number.
const NUMBER_OF_CLUES_PER_CATEGORY = 5; // The number of clues you will be displaying per category. You can change this number.

let categories = []; // The categories with clues fetched from the API.
let activeClue = null; // Currently selected clue data.
let activeClueMode = 0; // Controls the flow of #active-clue element while selecting a clue, displaying the question of selected clue, and displaying the answer to the question.
let isPlayButtonClickable = true; // Only clickable when the game haven't started yet or ended. Prevents the button to be clicked during the game.

$("#play").on("click", handleClickOfPlay);

/**
 * Manages the behavior of the play button (start or restart) when clicked.
 * Sets up the game.
 */
function handleClickOfPlay() {
  if (isPlayButtonClickable) {
    isPlayButtonClickable = false;
    setupTheGame();
  }
}

/**
 * Sets up the game.
 *
 * 1. Cleans the game since the user can be restarting the game.
 * 2. Get category IDs
 * 3. For each category ID, get the category with clues.
 * 4. Fill the HTML table with the game data.
 */
async function setupTheGame() {
  // Cache the spinner selector
  const $spinner = $("#spinner");

  // Show the spinner while setting up the game
  $spinner.removeClass("disabled");

  // Reset the DOM (table, button text, the end text)
  $("#categories").empty();
  $("#clues").empty();
  $("#active-clue").empty();
  $("#play").text("Restart the Game!");

  // Fetch the game data (categories with clues)
  const categoryIds = await getCategoryIds();
  categories = await Promise.all(categoryIds.map(id => getCategoryData(id)));

  // Fill the table
  fillTable(categories);

  // Hide the spinner after setting up the game
  $spinner.addClass("disabled");
}

/**
 * Gets as many category IDs as in the `NUMBER_OF_CATEGORIES` constant.
 * Returns an array of numbers where each number is a category ID.
 */
async function getCategoryIds() {
  const response = await axios.get(`${API_URL}/categories?count=100`);
  const allCategories = response.data;

  // Filter categories with enough clues and randomly pick the required number of categories
  const validCategories = allCategories.filter(category => category.clues_count >= NUMBER_OF_CLUES_PER_CATEGORY);
  const selectedCategories = _.sampleSize(validCategories, NUMBER_OF_CATEGORIES);

  return selectedCategories.map(category => category.id);
}

/**
 * Gets category with as many clues as given in the `NUMBER_OF_CLUES` constant.
 * Returns the below data structure:
 *  {
 *    "id": <category ID>
 *    "title": <category name>
 *    "clues": [
 *      {
 *        "id": <clue ID>,
 *        "value": <value of the question>,
 *        "question": <question>,
 *        "answer": <answer to the question>
 *      },
 *      ... more clues
 *    ]
 *  }
 */
async function getCategoryData(categoryId) {
  const response = await axios.get(`${API_URL}/category?id=${categoryId}`);
  const category = response.data;

  // Assign values to clues if not present
  const clues = category.clues.slice(0, NUMBER_OF_CLUES_PER_CATEGORY).map((clue, index) => ({
    id: clue.id,
    value: clue.value || (index + 1) * 100,
    question: clue.question,
    answer: clue.answer
  }));

  return {
    id: category.id,
    title: category.title,
    clues: clues
  };
}

/**
 * Fills the HTML table using category data.
 */
function fillTable(categories) {
  // Fill table head with category titles
  const thead = $("<thead>");
  const tr = $("<tr>");
  categories.forEach(category => {
    const th = $("<th>").text(category.title);
    tr.append(th);
  });
  thead.append(tr);
  $("#categories").append(thead);

  // Fill table body with clues
  const tbody = $("<tbody>");
  for (let i = 0; i < NUMBER_OF_CLUES_PER_CATEGORY; i++) {
    const tr = $("<tr>");
    categories.forEach(category => {
      const clue = category.clues[i];
      const td = $("<td>").addClass("clue").attr("id", `${category.id}-${clue.id}`).text(clue.value);
      tr.append(td);
    });
    tbody.append(tr);
  }
  $("#clues").append(tbody);
}

$(document).on("click", ".clue", handleClickOfClue);

/**
 * Manages the behavior when a clue is clicked.
 * Displays the question if there is no active question.
 */
function handleClickOfClue(event) {
  if (activeClueMode !== 0) return;

  const [categoryId, clueId] = event.target.id.split("-");
  const category = categories.find(cat => cat.id == categoryId);
  const clue = category.clues.find(cl => cl.id == clueId);

  activeClue = clue;
  activeClueMode = 1;

  $(event.target).addClass("viewed");
  $("#active-clue").html(clue.question);
}

$("#active-clue").on("click", handleClickOfActiveClue);

/**
 * Manages the behavior when a displayed question or answer is clicked.
 * Displays the answer if currently displaying a question.
 * Clears if currently displaying an answer.
 */
function handleClickOfActiveClue(event) {
  if (activeClueMode === 1) {
    activeClueMode = 2;
    $("#active-clue").html(activeClue.answer);
  } else if (activeClueMode === 2) {
    activeClueMode = 0;
    $("#active-clue").html(null);

    // Remove the viewed clue from the categories array
    categories.forEach(category => {
      category.clues = category.clues.filter(clue => clue.id !== activeClue.id);
    });

    // Check if all clues are viewed
    if (categories.every(category => category.clues.length === 0)) {
      isPlayButtonClickable = true;
      $("#play").text("Restart the Game!");
      $("#active-clue").html("The End!");
    }
  }
}