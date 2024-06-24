const countState:number=0;
import { createSlice } from "@reduxjs/toolkit";
const countReducer=createSlice({
    name:'CountReducer',
    initialState:countState,
    reducers:{
        increase:(state)=>state+=1,
        decrease:(state)=>state-=1,
        reset:(state)=>state=0,
    }
})
// xuất ra action
export const {increase,decrease,reset}=countReducer.actions;
// xuất ra thg reducer count
export default countReducer.reducer;