import { createSlice } from "@reduxjs/toolkit";
const initialMenu:boolean=true;
const reducerMenu=createSlice({
    name:'Menu',
    initialState:initialMenu,
    reducers:{
        check:(state)=>!state,
    }
})
export const {check}=reducerMenu.actions;
export default reducerMenu.reducer