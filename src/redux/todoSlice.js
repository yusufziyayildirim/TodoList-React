import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id:1,
        title: 'todo1',
        completed: false
    },
    {
        id:2,
        title: 'todo2',
        completed: true
    },
    {
        id:3,
        title: 'todo3',
        completed: false
    }
];


export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false
            };
            state.push(newTodo);
        },
        deleteTodo: (state, action) => {
           return state.filter((todo) => todo.id !== action.payload.id )
        },
        editTodo: (state, action) => {
            
        },
        completeTodo: (state, action) => {
            const index = state.findIndex(
                (todo) => todo.id === action.payload.id
            )
            state[index].completed = action.payload.completed
        },
    },
})

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, editTodo, completeTodo } = todoSlice.actions

export default todoSlice.reducer