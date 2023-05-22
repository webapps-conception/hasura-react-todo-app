import React from 'react'
import { useMutation } from '@apollo/client'

import { GET_TODOS, TOGGLE_COMPLETED, REMOVE_TODO } from './graphql/queries'
import './Task.css'

const Task = ({ todo }) => {
  const [removeTodoMutation] = useMutation(REMOVE_TODO)

  const toggleCompleted = ({ id, completed }) => {}

  const removeTodo = (id) => {
    removeTodoMutation({
      variables: { id },
      optimisticResponse: true,
      update: (cache) => {
        const existingTodos = cache.readQuery({ query: GET_TODOS })
        const todos = existingTodos.todos.filter((t) => t.id !== id)
        cache.writeQuery({
          query: GET_TODOS,
          data: { todos },
        })
      },
    })
  }

  return (
    <div key={todo.id} className="task">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleCompleted(todo)}
      />
      <span className={todo.completed ? "completed" : ""}>{todo.task}</span>
      <button type="submit" onClick={() => removeTodo(todo.id)}>
        remove
      </button>
    </div>
  )
}

export default Task