import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.data.push({
                text: action.payload.value, 
                id: Date.now(), 
                completed: false, 
                priority: action.payload.priority || 'low' 
            });
        },
        removeTodo: (state, action) => {
            state.data = state.data.filter(todo => todo.id !== action.payload.id);
        },
        toggleComplete: (state, action) => {
            const todo = state.data.find(todo => todo.id === action.payload.id);
            if(todo) {
                todo.completed = !todo.completed;
            }
        }
    }
})

export const { addTodo, removeTodo, toggleComplete } = todosSlice.actions;

export default todosSlice.reducer;