document.addEventListener("DOMContentLoaded", function () {
	const noteContainer = document.getElementById("note-container");
	const newNoteButton = document.getElementById("new-note-button");
	const colorForm = document.getElementById("color-form");
	const colorInput = document.getElementById("color-input");

	// Load the note color from the local storage.
	let noteColor = localStorage.getItem("noteColor") || "#ffffff"; // Default to white if not set.
	colorInput.value = noteColor;

	// Load the note ID counter from the local storage.
	let noteIdCounter = parseInt(localStorage.getItem("noteIdCounter")) || 0;

	// Load the notes from the local storage.
	const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
	savedNotes.forEach(noteData => {
		const note = document.createElement("textarea");
		note.setAttribute("data-note-id", noteData.id);
		note.value = noteData.content;
		note.className = "note";
		note.style.backgroundColor = noteData.color;
		noteContainer.appendChild(note);
	});

	// Function to add a new note
	function addNewNote() {
		const id = noteIdCounter;
		const content = `Note ${id}`;

		const note = document.createElement("textarea");
		note.setAttribute("data-note-id", id.toString());
		note.value = content;
		note.className = "note";
		note.style.backgroundColor = noteColor;
		noteContainer.appendChild(note);

		noteIdCounter++;
		localStorage.setItem("noteIdCounter", noteIdCounter.toString());

		// Add new note to the saved notes in the local storage.
		savedNotes.push({ id, content, color: noteColor });
		localStorage.setItem("notes", JSON.stringify(savedNotes));
	}

	// Event listener for color form submission
	colorForm.addEventListener("submit", function (event) {
		event.preventDefault();

		const newColor = colorInput.value.trim();

		// Update the background color of all notes
		const notes = document.querySelectorAll(".note");
		for (const note of notes) {
			note.style.backgroundColor = newColor;
		}

		colorInput.value = "";

		noteColor = newColor;
		localStorage.setItem("noteColor", noteColor); // Update the note color in the local storage.
	});

	// Event listener for new note button click
	newNoteButton.addEventListener("click", function () {
		addNewNote();
	});

	// Event listener for double-click to delete a note
	document.addEventListener("dblclick", function (event) {
		if (event.target.classList.contains("note")) {
			const noteId = event.target.getAttribute("data-note-id");
			event.target.remove();

			// Delete the note from the saved notes in the local storage.
			const noteIndex = savedNotes.findIndex(note => note.id.toString() === noteId);
			if (noteIndex !== -1) {
				savedNotes.splice(noteIndex, 1);
				localStorage.setItem("notes", JSON.stringify(savedNotes));
			}
		}
	});

	// Event listener for note blur to save content
	noteContainer.addEventListener("blur", function (event) {
		if (event.target.classList.contains("note")) {
			const noteId = event.target.getAttribute("data-note-id");
			const noteContent = event.target.value;

			// Update the note in the saved notes in the local storage.
			const note = savedNotes.find(note => note.id.toString() === noteId);
			if (note) {
				note.content = noteContent;
				localStorage.setItem("notes", JSON.stringify(savedNotes));
			}
		}
	}, true);

	// Event listener for keydown to add a new note with 'n' or 'N'
	window.addEventListener("keydown", function (event) {
		if (event.target.id === "color-input" || event.target.type === "textarea") {
			return;
		}

		if (event.key === "n" || event.key === "N") {
			addNewNote();
		}
	});
});