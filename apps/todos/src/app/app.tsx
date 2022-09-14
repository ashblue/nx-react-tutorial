import React, { useEffect, useState } from 'react'

interface Todo {
  title: string;
}

export const App = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    fetch('/api/todos')
      .then((res) => res.json())
      .then(setTodos);
  }, [])

  const addTodo = () => {
    fetch('/api/addTodo', {
      method: 'POST',
      body: '',
    })
      .then((res) => res.json())
      .then((newTodo) => {
        setTodos([...todos, newTodo]);
      })
  }

  return (
    <>
      <h1>Todos</h1>

      <ul>
        {todos.map((t, i) => <li key={i} className="todo">{t.title}</li>)}
      </ul>

      <button id={'add-todo'} onClick={addTodo}>
        Add Todo
      </button>
    </>
  )
}

export default App;
