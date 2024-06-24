import { createSlice } from "@reduxjs/toolkit";
const initialGrid:boolean=true;
const reducerGrid=createSlice({
    name:'Grid',
    initialState:initialGrid,
    reducers:{
        check:(state)=>!state,
    }
})
export const {check}=reducerGrid.actions;
export default reducerGrid.reducer