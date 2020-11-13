export const initialAppState = {
  todo: [
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
        todo: [...state.todo, newTodos],
      };
    case "COMP_TODOS":
      const compTodos = state.todo.map((todos) => {
        if (todos.id === action.payload) {
          return {
            ...todos,
            isCompleted: !todos.isCompleted,
          };
        }
        return todos;
      });
      return {
        ...state,
        todo: compTodos
      }
      case "REMOVE_TODOS" :
        const removeTodos = state.todo.filter((todos) => {
          return todos.id !== action.payload
        })
        return {
          ...state,
          todo: removeTodos
        }
    default:
      return state;
  }
};
