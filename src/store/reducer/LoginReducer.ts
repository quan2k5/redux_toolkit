import { PayloadAction,createSlice } from "@reduxjs/toolkit";
const initialUser={
    email:'lanhquan130@gmail.com',
    password:'123456789',
    status:false,
}
interface User{
    email:string,
    password:string,
    status:true,
}
const reducerUsers=createSlice({
    name:"User",
    initialState:initialUser,
    reducers:{
        login:(state)=>{
            return {...state,status:true};
        },
        logout:(state)=>{
            return {...state,status:false};
        }
    }
})
export const {login,logout}=reducerUsers.actions;
export default reducerUsers.reducer;
