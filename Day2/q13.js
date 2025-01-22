class Task {
    constructor(taskName, priority, dueDate) {
        this.taskName = taskName;
        this.priority = priority;
        this.dueDate = new Date(dueDate);
    }
}

class TaskManager {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }
}
