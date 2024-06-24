import { createSlice } from "@reduxjs/toolkit";
const initialLight:boolean=true;
const reducerLight=createSlice({
    name:'Light',
    initialState:initialLight,
    reducers:{
        check:(state)=>!state,
    }
})
export const {check}=reducerLight.actions;
export default reducerLight.reducer