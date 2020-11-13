import React, { /* useState, */ useReducer } from 'react'
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import { initialAppState , appReducer } from './reducers/appReducer'
import './App.css';

function App() {
  const [orgTodoList, dispatch] = useReducer(appReducer, initialAppState)
  // const [todos, setTodos] = useState([
  //   {
  //     text: "Learn about React",
  //     isCompleted: false,
  //     id: 1
  //   },
  //   {
  //     text: "Meet friend for lunch",
  //     isCompleted: false,
  //     id: 2
  //   },
  //   {
  //     text: "Build really cool todo app",
  //     isCompleted: false,
  //     id: 3
  //   }
  // ]);

  const addTodo = text => {    
    dispatch({
      type: "ADD_TODOS",
      payload: text
    })
  };

  const completeTodo = id => {
    dispatch({
      type: "COMP_TODOS",
      payload: id
    })
   };

  const removeTodo = id => {
    dispatch({
      type: "REMOVE_TASK",
      payload: id
    })
  };

  return (
     <div className="app">
      <div className="todo-list">
        {orgTodoList.todoList.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
    
  );
}

export default App;
