document.addEventListener("DOMContentLoaded", function () {
    solveTask1();
    solveTask2();
    solveTask3();
    solveTask4();
    solveTask5();
    solveTask6();
    solveTask7();
    solveTask8();
    solveTask9();
});

// Task 1: Change the text of the element with id "task1"
function solveTask1() {
    document.getElementById("task1").innerText = "Changed using 'innerText'.";
}

// Task 2: Insert a button inside the element with id "task2"
function solveTask2() {
    document.getElementById("task2").innerHTML = "<button>Submit</button>";
}

// Task 3: Change the background color of the body
function solveTask3() {
    // HEX color: #232323
    document.body.style.backgroundColor = "rgba(35, 35, 35, 1)";
}

// Task 4: Add a border to all elements with class "item"
function solveTask4() {
    document.querySelectorAll(".item").forEach(item => {
        item.style.border = "2px solid black";
    });
}

// Task 5: Change the href attribute of the element with id "task5"
function solveTask5() {
    document.getElementById("task5").href = "https://www.springboard.com/";
}

// Task 6: Change the value of the input element with id "task6"
function solveTask6() {
    document.getElementById("task6").value = "DOM Master";
}

// Task 7: Add a new class to the element with id "task7"
function solveTask7() {
    document.getElementById("task7").classList.add("new-class");
}

// Task 8: Create a new button and append it to the element with id "task8"
/**
 * Creates a new button element with the text "New Button" and appends it to the element with the ID "task8".
 */
function solveTask8() {
    const newButton = document.createElement("button");
    newButton.innerText = "New Button";
    document.getElementById("task8").appendChild(newButton);
}

// Task 9: Remove the element with id "task9"
function solveTask9() {
    const task9Element = document.getElementById("task9");
    task9Element.parentNode.removeChild(task9Element);
}