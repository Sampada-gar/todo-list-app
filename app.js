// Select elements from the DOM
const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Function to create a new task item
function createTask(taskContent) {
  const li = document.createElement("li");

  // Create task text
  const text = document.createTextNode(taskContent);

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => li.remove();

  // Append text and button to the list item
  li.appendChild(text);
  li.appendChild(deleteBtn);

  // Append the list item to the task list
  taskList.appendChild(li);
}

// Add event listener to add task
addBtn.addEventListener("click", () => {
  const taskContent = taskInput.value.trim();
  if (taskContent) {
    createTask(taskContent);
    taskInput.value = ""; // Clear input field
  }
});

// Optionally, you can press Enter to add a task

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
});

