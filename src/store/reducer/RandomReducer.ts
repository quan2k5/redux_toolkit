import { createSlice } from "@reduxjs/toolkit";
const initilArray:number[]=[];
const randomReducer=createSlice({
    initialState:initilArray,
    name:'Random Array',
    reducers:{
        random:(state)=>{
            let number=Math.ceil(Math.random()*10000);
            state.push(number);
            return state;
        },
    }
})
export const {random} =randomReducer.actions;
export default randomReducer.reducer;