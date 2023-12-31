"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const Body = req.body;
    const newtodo = {
        id: new Date().toISOString(),
        text: Body.text
    };
    todos.push(newtodo);
    res.status(201).json({ message: 'added todo', todo: newtodo, todos: todos });
});
router.put('/todo/:todoid', (req, res, next) => {
    const Params = req.params;
    const tid = Params.todoid;
    const todoindex = todos.findIndex(todoitem => todoitem.id === tid);
    if (todoindex >= 0) {
        todos[todoindex] = { id: todos[todoindex].id, text: req.body.text };
        return res.status(200).json({ message: 'updatedbio', todos: todos });
    }
    res.status(404).json({ message: 'could not found todo for this id:' });
});
router.delete('/todo/:todoid', (req, res, next) => {
    const Params = req.params;
    todos = todos.filter(todoitem => todoitem.id !== Params.todoid);
    res.status(200).json({ message: 'deletedtodo', todos: todos });
});
exports.default = router;
