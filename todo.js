const addButton = document.getElementById("addButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const deleteAllButton = document.getElementById("deleteAllButton");
const selectAllButton = document.getElementById("selectAllButton");

addButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
        taskItem.innerHTML = `
            <input type="checkbox" class="form-check-input me-2">
            <span>${taskText}</span>
            <button class="deleteButton btn btn-danger btn-sm"><i class="bi bi-trash"></i></button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = "";

        const deleteButton = taskItem.querySelector(".deleteButton");
        deleteButton.addEventListener("click", () => {
            taskItem.remove();
        });
    }
});

deleteAllButton.addEventListener("click", () => {
    const checkedCheckboxes = taskList.querySelectorAll("input[type='checkbox']:checked");
    checkedCheckboxes.forEach((checkbox) => {
        checkbox.closest("li").remove();
    });
});


selectAllButton.addEventListener("click", () => {
    const checkboxes = taskList.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach((checkbox) => {
        checkbox.checked = true;
    });
});