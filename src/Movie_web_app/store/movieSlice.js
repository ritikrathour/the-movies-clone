import { createSlice } from "@reduxjs/toolkit";
const MovieSlice = createSlice({
    name:"movie",
    initialState:{
        url:{},
        geners:{}
    },
    reducers:{
        getApiConfiguration:(state,action)=>{ 
            state.url = action.payload;
        },
        getGenersConfiguration:(state,action)=>{
            state.geners = action.payload;
        }
    }
});
export const {getApiConfiguration,getGenersConfiguration} = MovieSlice.actions;
export default MovieSlice.reducer; 