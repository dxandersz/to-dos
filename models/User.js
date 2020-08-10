const db = require('../db/config');

class ToDo {
    constructor(todo) {
        this.id = todo.id || null;
        this.todo = todo.todo;
        this.date = todo.date;
    }

    static getAll() {
        return db
        .manyOrNone('SELECT * FROM todos ORDER BY id ASC')
        .then((todos) => {
            return todos.map((todo) => {
                return new this (todo);
            });
        });
    }

    static getById(id) {
        return db.oneOrNone('SELECT * FROM animals WHERE id = $1', id)
        .then((todo) => {
            if (todo) return new this(todo);
            throw new Error(`You haven't made this task.`);
        });
    }

    save() {
        return db.one(
            `INSERT INTO todos todo, date)
            VALUES ($/todo/, $/date/ RETURNING *`, this)
        .then((todo) => {
            return Object.assign(this, todo);
        })
    }

    update(changes) {
        
    }


}