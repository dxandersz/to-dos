const express = require('express');
const toDoRouter = express.Router();

const toDoController = require('../controllers/todocontroller');

toDoRouter.get('/', todocontroller.index);
toDoRouter.post('/', todocontroller.create);

toDoRouter.get('/add', (req, res) => {
    res.render('/todos/add');
});

toDoRouter.get('/:id[0-9]+', todocontroller.show, (req, res) => {
    res.render('todos/show', {
        animal: res.locals.todos,
    });
});
toDoRouter.get('/:id[0-9]+)/edit', todocontroller.show, (req, res) => {
    res.render('todos/edit', {
        todo: res.locals.todo,
    });
});

toDoRouter.put('/:id', todocontroller.update);

toDoRouter.delete(':/id', todocontroller.delete);

module.exports = toDoRouter;
