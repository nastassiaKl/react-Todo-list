import React from 'react'

import './App.css';
import TodoList from './Todo/TodoList';
import Context from './Context';
import AddTodo from './Todo/AddTodo.js';

function App() {
  //UseState return [state, changeValue]
const [todos, setTodos] = React.useState([
  {id: 1, completed: false, title: 'Сходить за грушей'},
  {id: 2, completed: false, title: 'Сходить за апельсинкой'},
  {id: 3, completed: false, title: 'Сходить за бананом'},
])

function toggleTodo(id) {
  setTodos(
    todos.map(item => {
      if (item.id === id) 
        item.completed = !item.completed

      return item;
    }));
}

function removeTodo(id) {
  setTodos(todos.filter(item => item.id !== id))
}

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className='wrapper'>
        <h1>Head title</h1>
        {todos.length ?  (
        <TodoList todos={todos} onToggle={toggleTodo}/> 
        ) : (
          <p>No todos!</p>
        )}

        <AddTodo />

      </div>
    </Context.Provider>

  );
}

export default App;
