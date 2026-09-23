const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const message = document.getElementById("message");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


// Function to display a task
function displayTask(task) {

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const taskText = document.createElement("span");
    taskText.textContent = task;

    li.appendChild(checkbox);
    li.appendChild(taskText);


    // Complete task
    checkbox.addEventListener("change", function() {

        if (checkbox.checked) {

            taskText.style.textDecoration = "line-through";
            taskText.style.opacity = "0.5";

            message.textContent = "🎉 Very good! Keep it up!";

        } else {

            taskText.style.textDecoration = "none";
            taskText.style.opacity = "1";

            message.textContent = "";

        }

    });


    // Delete button
    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function() {

        li.remove();

        tasks = tasks.filter(function(item) {
            return item !== task;
        });

        localStorage.setItem("tasks", JSON.stringify(tasks));

    });


    li.appendChild(deleteButton);

    taskList.appendChild(li);
}


// Add new task
addButton.addEventListener("click", function() {

    const task = taskInput.value.trim();

    if (task === "") {
        return;
    }

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTask(task);

    taskInput.value = "";

});


// Load saved tasks when page opens
tasks.forEach(function(task) {

    displayTask(task);

});
