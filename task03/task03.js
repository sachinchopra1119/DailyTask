let todo = [];

// Add Task function
function addTask() {
  let task = document.getElementById("taskInput").value;
  if (task) {
    todo.push(task);
    document.getElementById("taskInput").value = ""; // Clear input field
    alert("Task added!");
    listTasks(); // Refresh the task list
  } else {
    alert("Please enter a task!");
  }
}

// List Tasks function
function listTasks() {
  let taskUl = document.getElementById("taskUl");
  taskUl.innerHTML = ""; // Clear the current task list before displaying the new one

  if (todo.length === 0) {
    taskUl.innerHTML = "<li>No tasks available.</li>";
  } else {
    for (let i = 0; i < todo.length; i++) {
      let li = document.createElement("li");
      li.textContent = `${i}: ${todo[i]}`;
      taskUl.appendChild(li);
    }
  }
}

// Delete Task function
function deleteTask() {
  let index = document.getElementById("deleteInput").value;
  index = parseInt(index); // Convert to number

  if (isNaN(index) || index < 0 || index >= todo.length) {
    alert("Invalid index.");
  } else {
    todo.splice(index, 1);
    alert("Task deleted!");
    listTasks(); // Refresh the task list
  }
  document.getElementById("deleteInput").value = ""; // Clear the input field
}
