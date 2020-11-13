import React from 'react'

const Todo = ({ todo, id, completeTodo, removeTodo }) => {
    return (
         <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}

      <div>
        <button onClick={() => completeTodo(id)}>Complete</button>
        <button onClick={() => removeTodo(id)}>x</button>
      </div>
    </div>
    )
}

export default Todo
