import { createSlice } from "@reduxjs/toolkit";

const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];

const slice = createSlice({
  name: "todoSlice",
  initialState: {
    todos: savedTodos,
  },
  reducers: {
    createTodo: (state, action) => {
      const newTodo = {
        id: crypto.randomUUID(),
        name: action.payload.name,
        email: action.payload.email,
        phone: action.payload.phone,
        status: action.payload.status,
      };
      state.todos = [...state.todos, newTodo];
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id == action.payload.id ? action.payload : todo
      );
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export const { createTodo, updateTodo, deleteTodo } = slice.actions;

export default slice.reducer;
