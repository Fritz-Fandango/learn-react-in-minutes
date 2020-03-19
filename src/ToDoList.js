import React from 'react'
import PropTypes from 'prop-types'
import ToDo from './ToDo'

const ToDoList = ({todos, toggleToDo}) => {
  return (
    todos.map(todo => {
      return (
        <ToDo
          key={todo.id}
          todo={todo}
          toggleToDo={toggleToDo}
        />
      )
    })
  )
}

ToDoList.propTypes = {
  todos: PropTypes.array.isRequired,
}

export default ToDoList
