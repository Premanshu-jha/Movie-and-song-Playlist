import { createSlice,configureStore} from "@reduxjs/toolkit";
import SongPlaylist from "../components/SongPlaylist";
import { movieSlice } from "./slices/movieSlice";
import { songSlice } from "./slices/songSlice";













const store = configureStore({
    reducer:{
        songs:songSlice.reducer,
        movies:movieSlice.reducer
    }
});

export default store;

export const {addSong,removeSong} = songSlice.actions;

export const {addMovie,removeMovie} = movieSlice.actions;