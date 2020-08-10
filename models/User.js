const db = require('../db/config');

class ToDo {
    constructor(todo) {
        this.id = todo.id || null;
        this.todo = todo.todo;
        this.date = todo.date;
    }
}