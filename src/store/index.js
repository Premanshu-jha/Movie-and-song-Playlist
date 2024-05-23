import { createSlice,configureStore } from "@reduxjs/toolkit";
import SongPlaylist from "../components/SongPlaylist";


const songSlice = createSlice({
    name:'song',
    initialState:[],
    reducers:{
        addSong(state,action){
            state.push(action.payload);
        },

        removeSong(state,action){
            const index = state.indexOf(action.payload);
            state.splice(index,1);
        }
    }
});


const store = configureStore({
    reducer:{
        songs:songSlice.reducer
    }
});

export default store;

export const {addSong,removeSong} = songSlice.actions;