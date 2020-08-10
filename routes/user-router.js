const express = require('express');
const toDoRouter = express.Router();

const toDoController = require('../controllers/todocontroller');

toDoRouter.get('/', toDoController.index);
toDoRouter.post('/', toDoController.create);

toDoRouter.get('/add', (req, res) => {
    res.render('/todos/add');
});

toDoRouter.get('/:id[0-9]+', toDoController.show, (req, res) => {
    res.render('todos/show', {
        animal: res.locals.todos,
    });
});
toDoRouter.get('/:id[0-9]+)/edit', toDoController.show, (req, res) => {
    res.render('todos/edit', {
        todo: res.locals.todo,
    });
});

toDoRouter.put('/:id', toDoController.update);

toDoRouter.delete(':/id', toDoController.delete);

module.exports = toDoRouter;
