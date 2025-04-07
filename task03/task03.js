let todo = [];

function addTask() {
  let task = document.getElementById("taskInput").value;
  if (task) {
    todo.push(task);
    document.getElementById("taskInput").value = "";
    alert("Task added!");
    listTasks();
  } else {
    alert("Please enter a task!");
  }
}

function listTasks() {
  let taskUl = document.getElementById("taskUl");
  taskUl.innerHTML = "";

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

function deleteTask() {
  let index = document.getElementById("deleteInput").value;
  index = parseInt(index);

  if (isNaN(index) || index < 0 || index >= todo.length) {
    alert("Invalid index.");
  } else {
    todo.splice(index, 1);
    listTasks();
  }
  document.getElementById("deleteInput").value = "";
}
