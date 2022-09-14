import { Todo } from '@nx-react-tutorial/data';
import { Todos } from '@nx-react-tutorial/ui';
import React, { useEffect, useState } from 'react'

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

      <Todos todos={todos} />

      <button id={'add-todo'} onClick={addTodo}>
        Add Todo
      </button>
    </>
  )
}

export default App;
