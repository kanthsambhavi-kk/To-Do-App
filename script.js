const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", function() {
    
    const task = taskInput.value;

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const taskText = document.createElement("span");
    taskText.textContent = task;

    li.appendChild(checkbox);
    li.appendChild(taskText);

    checkbox.addEventListener("change", function() {

        if (checkbox.checked) {
            taskText.style.textDecoration = "line-through";
            taskText.style.opacity = "0.5";
        } else {
            taskText.style.textDecoration = "none";
            taskText.style.opacity = "1";
        }

    });

    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = "";

});