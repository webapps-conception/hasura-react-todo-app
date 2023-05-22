import React from 'react'
import { useQuery } from '@apollo/client'

import { GET_TODOS } from './graphql/queries'
import Task from './Task'
import './Tasks.css'

const Tasks = () => {
  const { loading, error, data } = useQuery(GET_TODOS)

  if (loading) {
    return <div className="tasks">Loading...</div>
  }
  if (error) {
    return <div className="tasks">Error!</div>
  }

  if ( data.todos.length > 0 ) {
    return (
      <div className="tasks">
        {data.todos.map((todo) => (
          <Task key={todo.id} todo={todo} />
        ))}
      </div>
    )
  } else {
    return (
      <div className="tasks">
        Aucune tache n'existe dans la base de données...
      </div>
    )
  }

}

export default Tasks