// Get references to the input box and list container elements
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a new task
function addTask() {
    // Check if the input box is empty
    if (inputBox.value == '') {
        // Display an alert if the input box is empty
        alert("You must write something");
    } else {
        // Create a new list item and set its content to the input value
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        // Append the new list item to the list container
        listContainer.appendChild(li);

        // Create a delete icon within a span element and append it to the list item
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // The "×" character
        li.appendChild(span);
    }

    // Clear the input box
    inputBox.value = "";

    // Save the updated task list to local storage
    saveData();
}

// Event listener for clicks on the list container
listContainer.addEventListener("click", function (e) {
    // Check if the clicked element is a list item
    if (e.target.tagName === 'LI') {
        // Toggle the "checked" class to mark the task as completed or not
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        // If the clicked element is a delete icon, remove the parent list item
        e.target.parentElement.remove();
    }

    // Save the updated task list to local storage
    saveData();
}, false);

// Function to save the task list to local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Function to load the task list from local storage
function loadData() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// Load the initial task list data from local storage
loadData();
