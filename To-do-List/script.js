function addTask() {
    let input = document.getElementById("taskInput");
    let taskValue = input.value;

    if (taskValue === "") {
        alert("Please enter a task");
        return;
    }

    // Create list item
    let li = document.createElement("li");

    // Create task text
    let taskText = document.createElement("span");
    taskText.innerText = taskValue;

    // Complete button
    let completeButton = document.createElement("button");
    completeButton.innerText = "Complete";

    completeButton.onclick = function () {
        taskText.style.textDecoration = "line-through";
        taskText.style.color = "gray";
    };

    // Edit button
    let editButton = document.createElement("button");
    editButton.innerText = "Edit";

    editButton.onclick = function () {
        let newTask = prompt("Edit your task:", taskText.innerText);

        if (newTask !== null && newTask !== "") {
            taskText.innerText = newTask;
        }
    };

    // Delete button
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";

    deleteButton.onclick = function () {
        li.remove();
    };

    // Add all into list item
    li.appendChild(taskText);
    li.appendChild(completeButton);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    // Add to task list
    document.getElementById("taskList").appendChild(li);

    // Clear input
    input.value = "";
}