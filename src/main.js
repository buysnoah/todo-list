const { Todo } = require('./todos.js');
const display = require('./display.js');

for (let i = 0; i <= 5; i++) {
    const todo = new Todo("Make this app work", "Make it follow the specification. Work work work", "2025-11-01", i, "Todo App");

    const todoElement = display.createTodoElement(todo);
    display.appendElement("body", todoElement);
}