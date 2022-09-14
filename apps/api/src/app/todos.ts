import { Todo } from '@nx-react-tutorial/data';
import {Express} from 'express';

const todos: Todo[] = [{title: 'Todo 1'}, {title: 'Todo 2'}]

export const addTodoRoutes = (app: Express) => {
    app.get('/api/todos', (req, res) => res.send(todos));
    app.post('/api/addTodo', (req, res) => {
        const newTodo = {title: `New todo ${Math.floor(Math.random() * 1000)}`};
        todos.push(newTodo);
        res.send(newTodo);
    })
}
