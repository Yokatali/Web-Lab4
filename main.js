const loadTasksBtn = document.getElementById("loadTasksBtn");
const statusMessage = document.getElementById("statusMessage");
const taskList = document.getElementById("taskList");

const taskManager = new TaskManager();

function render() {
    taskList.innerHTML = "";

    taskManager.tasks.forEach((task) => {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");

        if (task.completed) {
            taskDiv.classList.add("completed");
        }

        const titleSpan = document.createElement("span");
        titleSpan.textContent = task.title;

        const toggleBtn = document.createElement("button");
        toggleBtn.textContent = "Toggle";
        toggleBtn.addEventListener("click", () => {
            taskManager.toggleTask(task.id);
            render();
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
            taskManager.removeTask(task.id);
            render();
        });

        taskDiv.appendChild(titleSpan);
        taskDiv.appendChild(toggleBtn);
        taskDiv.appendChild(deleteBtn);
        taskList.appendChild(taskDiv);
    });
}

async function loadTasks() {
    statusMessage.textContent = "Loading tasks...";

    try {
        const rawTasks = await fetchTasks();

        const json = JSON.stringify(rawTasks);
        const parsedTasks = JSON.parse(json);

        const tasks = parsedTasks.map(
            (item) => new Task(item.id, item.title, item.completed)
        );

        taskManager.setTasks(tasks);
        render();
        statusMessage.textContent = "";
    } catch (error) {
        statusMessage.textContent = "Failed to load tasks.";
    }
}
loadTasksBtn.addEventListener("click", loadTasks);
