import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos : [{id: 1, title: 'Hello World'}]

};

export const todoSlice = createSlice({ 
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state,action) => {
            const newTodo = {
                id: nanoid(),
                text: action.payload.text,
            };
            state.todos.push(newTodo)
        },
        removeTodo: () => {},
    }
});
