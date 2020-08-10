const ToDo = require('../models/ToDo');

const todocontroller = {};

todocontroller.index = (req, res, next) => {
    ToDo.getAll()
    .then((todos) => {
        res.render('todos/index', {
            message: 'ok',
            data: { todos },
        });
    })
    .catch(next);
};

todocontroller.show = (req, res, next) => {
    ToDo.getById(req.params.id)
    .then((todo) => {
        res.locals.todo = todo;
        next();
    })
    .catch(next);
};

todocontroller.create = (req, res, next) => {
    new ToDo({
        todo: req.body.todo,
        date: req.body.date
    })
    .save()
    .then(() => {
        res.redirect('/todos')
    })
    .catch(next);
}

todocontroller.update = (req, res, next) => {
    ToDo.getById(req.params.id)
    .then((todo) => {
        return todo.update(req.body);
    })
    .then((updatedToDo) => {
        res.redirect(`/todos/${updatedToDo.id}`);
    })
    .catch(next);
}

todocontroller.delete = (req, res, next) => {
    ToDo.getById(req.params.id)
    .then((todo) => {
        return todo.delete();
    })
    .then(() => {
        res.redirect('/todos');
    })
    .catch(next);
};

module.exports = todocontroller;