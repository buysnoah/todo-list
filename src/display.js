require("./styles.css");

function appendElement(parentQuery, child) {
    document.querySelector(parentQuery).appendChild(child)
}

function createElement(type, className) {
    const el = document.createElement(type);
    el.classList.add(className);

    return el;
}




function createTodoElement(todo) {
    const todoDiv = createElement("div", "todo");
    todoDiv.dataset.priority = todo.priority;
    todoDiv.dataset.done = todo.done;

    const doneCheckbox = createElement("input", "done");
    doneCheckbox.type = "checkbox";
    doneCheckbox.checked = todo.done;
    doneCheckbox.addEventListener("change", e => {
        todoDiv.dataset.done = doneCheckbox.checked;
    });

    const infoDiv = createElement("div", "info");

    const title = createElement("h1", "title");
    title.textContent = todo.title;

    const description = createElement("p", "description");
    description.textContent = todo.description;

    const date = createElement("span", "date");
    date.textContent = todo.formatDueDate("y-M-d");

    let toggle = description.style.display === "none";
    const expandButton = createElement("button", "expand");
    expandButton.classList.add("material-symbols-outlined");

    function updateExpand() {
        if (toggle) {
            description.style.display = "none";
            expandButton.textContent = "arrow_drop_down";
        } else {
            description.style.display = "block";
            expandButton.textContent = "arrow_drop_up";
        };
    }
    updateExpand();

    expandButton.addEventListener("click", (e) => {
        toggle = !toggle;
        updateExpand();
    });

    infoDiv.appendChild(title);
    infoDiv.appendChild(description);
    infoDiv.appendChild(date);

    todoDiv.appendChild(doneCheckbox);
    todoDiv.appendChild(infoDiv);
    todoDiv.appendChild(expandButton);

    return todoDiv;
}

module.exports = { appendElement, createElement, createTodoElement }