// Function to Add a Task
function addTask() {
    let taskInput = document.getElementById("taskInput"); // Get the input field
    let taskText = taskInput.value.trim(); // Trim whitespace from input

    // Check if input is empty
    if (taskText === "") {
        alert("Please enter a task!"); // Show alert if no task is entered
        return;
    }

    // Create a new list item (li)
    let li = document.createElement("li");

    // Add task text and delete button inside the list item
    li.innerHTML = `
        <span onclick="toggleTask(this)">${taskText}</span> <!-- Click to mark as completed -->
        <button onclick="removeTask(this)">❌</button> <!-- Delete button -->
    `;

    // Append the new task to the task list
    document.getElementById("taskList").appendChild(li);

    // Clear the input field after adding task
    taskInput.value = "";
}

// Function to Toggle Task Completion (Mark as Done/Undone)
function toggleTask(task) {
    task.classList.toggle("completed"); // Toggle the "completed" class for styling
}

// Function to Remove a Task
function removeTask(button) {
    button.parentElement.remove(); // Remove the entire task (li) when delete button is clicked
}
