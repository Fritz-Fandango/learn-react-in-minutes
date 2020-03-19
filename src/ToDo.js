import React from 'react'
import PropTypes from 'prop-types'

const ToDo = ({todo, toggleToDo}) => {
  const handleToggleToDo = () => { toggleToDo(todo.id) }

  return (
    <div>
      <label>
        <input type="checkbox" onChange={handleToggleToDo} checked={todo.complete} />
        {todo.name}
      </label>
    </div>
  )
}

ToDo.propTypes = {
  todo: PropTypes.object,
}

export default ToDo
