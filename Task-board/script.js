const input = document.querySelector("#task-input");
const btn = document.querySelector("#add-btn");

btn.onclick = () => {
    if (input.value === "") return;
    addTask(input.value);
    input.value = "";
};

function addTask(text) {
    const task = document.createElement("div");
    task.classList.add("task");
    task.draggable = true;
    task.innerText = text;

    document.querySelector('[data-status="todo"] .task-list').appendChild(task);

    enableDragEvents(task);
}

function enableDragEvents(task) {
    task.addEventListener("dragstart", () => {
        task.classList.add("dragging");
    });

    task.addEventListener("dragend", () => {
        task.classList.remove("dragging");
    });
}

document.querySelectorAll(".task-list").forEach((list) => {
    list.addEventListener("dragover", (e) => {
        e.preventDefault();
        const dragging = document.querySelector(".dragging");
        list.appendChild(dragging);
    });
});
