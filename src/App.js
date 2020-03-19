import React, { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ToDoList from './ToDoList';

const LOCAL_STORAGE_KEY = 'todoApp.todos';

function App() {
  const [todos, setToDos] = useState([]);

  const todoNameRef = useRef();

  useEffect(() => {
    const storedToDos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    if(storedToDos) setToDos(storedToDos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const toggleToDo = (id) => {
    const newToDos = [...todos];

    const todo = newToDos.find(todo => todo.id === id);

    todo.complete = !todo.complete;

    setToDos(newToDos);
  }

  const handleAddToDo = (event) => {
    const name = todoNameRef.current.value;

    if(name === '') return;

    setToDos(prevToDos => {
      return [...prevToDos, {id: uuidv4(), name: name, complete: false}]
    })

    todoNameRef.current.value = null;
  }

  const handleClearToDos = () => {
    const incompleteToDos = todos.filter(todo => !todo.complete)

    setToDos(incompleteToDos);
  }

  return (
    <>
      <ToDoList todos={todos} toggleToDo={toggleToDo} />
      <input ref={todoNameRef} type='text' />
      <button onClick={handleAddToDo}>Add ToDo</button>
      <button onClick={handleClearToDos}>Clear Completed ToDo's</button>
      <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    </>
  )
}

export default App;
