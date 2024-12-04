// script.js
document.getElementById('addTaskButton').addEventListener('click', function () {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== "") {
        const newTask = document.createElement('li');
        newTask.innerHTML = `
            ${taskInput.value}
            <button onclick="removeTask(this)">Delete</button>
        `;
        taskList.appendChild(newTask);
        taskInput.value = ""; // Clear input field
    }
});

function removeTask(button) {
    const task = button.parentElement;
    task.remove();
}
