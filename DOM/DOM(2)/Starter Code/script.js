document.addEventListener('DOMContentLoaded', function() {
    // Step 2: Get the elements from the DOM
    const boxContainer = document.getElementById('box-container');
    const newBoxButton = document.getElementById('new-box-button');
    const colorForm = document.getElementById('color-form');
    const colorInput = document.getElementById('color-input');

    // Step 3: Create variables to store the box color and counter for the box ID
    let boxColor = 'black';
    let boxCounter = 1;

    // Step 4: Form submission event to set the color of all boxes
    colorForm.addEventListener('submit', function(event) {
        event.preventDefault();
        boxColor = colorInput.value;
        const boxes = document.getElementsByClassName('box');
        for (let box of boxes) {
            box.style.backgroundColor = boxColor;
        }
        colorInput.value = '';
    });

    // Step 5: Function to add a new box
    function addNewBox() {
        const box = document.createElement('div');
        box.className = 'box';
        box.textContent = boxCounter;
        box.style.backgroundColor = boxColor;
        box.dataset.id = boxCounter;
        boxContainer.appendChild(box);
        boxCounter++;
    }

    // Step 6: New box button click event
    newBoxButton.addEventListener('click', addNewBox);

    // Step 7: Double-click event to remove a box
    document.addEventListener('dblclick', function(event) {
        if (event.target.classList.contains('box')) {
            event.target.remove();
        }
    });

    // Step 8: Mouse over event to display box's page coordinates
    document.addEventListener('mouseover', function(event) {
        if (event.target.classList.contains('box')) {
            const rect = event.target.getBoundingClientRect();
            const x = rect.left + window.scrollX;
            const y = rect.top + window.scrollY;
            event.target.textContent = `(${Math.round(x)}, ${Math.round(y)})`;
        }
    });

    // Step 9: Mouse out event to display box's ID back
    document.addEventListener('mouseout', function(event) {
        if (event.target.classList.contains('box')) {
            event.target.textContent = event.target.dataset.id;
        }
    });

    // Step 10: Key down event to create a new box when 'N' key is pressed
    document.addEventListener('keydown', function(event) {
        if (event.key.toLowerCase() === 'n' && document.activeElement !== colorInput) {
            addNewBox();
        }
    });
});