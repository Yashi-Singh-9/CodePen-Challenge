// Selecting elements
const addButton = document.querySelector(".add-button");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");

// Add Todo Item
addButton.addEventListener("click", () => {
	const taskText = todoInput.value.trim();
	if (taskText) {
		addTodoItem(taskText);
		todoInput.value = ""; // Clear input
	}
});

// Function to add a todo item
function addTodoItem(taskText) {
	const todoItem = document.createElement("li");
	todoItem.classList.add("todo-item", "add-animation");

	// Task text span
	const taskSpan = document.createElement("span");
	taskSpan.classList.add("task-text");
	taskSpan.textContent = taskText;

	// Complete button
	const completeButton = document.createElement("button");
	completeButton.classList.add("complete-button");
	completeButton.textContent = "Complete";
	completeButton.addEventListener("click", () => {
		todoItem.classList.toggle("completed");
	});

	// Delete button
	const deleteButton = document.createElement("button");
	deleteButton.classList.add("delete-button");
	deleteButton.textContent = "Delete";
	deleteButton.addEventListener("click", () => {
		todoItem.classList.add("remove-animation");
		setTimeout(() => todoItem.remove(), 300); // Remove after animation
	});

	// Append elements to the todo item
	todoItem.appendChild(taskSpan);
	todoItem.appendChild(completeButton);
	todoItem.appendChild(deleteButton);

	// Append todo item to the list
	todoList.appendChild(todoItem);
}

// Enter key functionality
todoInput.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		addButton.click();
	}
});
