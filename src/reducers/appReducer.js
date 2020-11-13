export const initialAppState = {
  todoList: [
    {
      text: "Learn about React",
      isCompleted: false,
      id: 1,
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false,
      id: 2,
    },
    {
      text: "Build really cool todo app",
      isCompleted: false,
      id: 3,
    },
  ],
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODOS":
      const newTodos = {
        text: action.payload,
        isCompleted: false,
        id: Date.now(),
      };
      return {
        ...state,
        todoList: [...state.todoList, newTodos],
      };
    case "COMP_TODOS":
      const compTodos = state.todoList.map((task) => {
        if (task.id === action.payload) {
          return {
            ...task,
            isCompleted: !task.isCompleted,
          };
        }
        return task;
      });
      return {
        ...state,
        todoList: compTodos
      }
      case "REMOVE_TASK" :
        const newTodoListWithoutRemovedTask = state.todoList.filter((task) => {
          return task.id !== action.payload
        })
        return {
          ...state,
          todoList: newTodoListWithoutRemovedTask
        }
    default:
      return state;
  }
};
