import { createSlice } from '@reduxjs/toolkit';
import { reset } from '../actions';

export const movieSlice = createSlice({
    name:'movie',
    initialState:[],
    reducers:{
        addMovie(state,action){
            state.push(action.payload);
        },

        removeMovie(state,action){
            const index = state.indexOf(action.payload);
            state.splice(index,1);
        },
    },

    extraReducers(builder){
        builder.addCase(reset, (state,action) => {
            return [];
        });
    }
});
