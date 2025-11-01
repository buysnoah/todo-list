const { parse, format, isPast } = require('date-fns');

class Todo {
    constructor(title, description="", dateString="", priority=0, project="") {
        this.title = title;
        this.description = description;
        this.dueDate = new Date(dateString);
        this.priority = priority;
        this.project = project;
    }

    setDate(dateString) {
        this.dueDate = new Date(dateString);
    }

    formatDate(formatStr) {
        return format(this.dueDate, formatStr);
    }

    isDueDatePassed() {
        return isPast(this.dueDate);
    }
}

module.exports = { Todo };