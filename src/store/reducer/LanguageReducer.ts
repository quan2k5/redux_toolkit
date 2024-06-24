import { PayloadAction, createSlice } from "@reduxjs/toolkit";
const initialLanguage:string='VietNamise';
const reducerLangage=createSlice({
    name:'Language',
    initialState:initialLanguage,
    reducers:{
        handleLanguage:(state,action:PayloadAction<string>)=>{
            if(action.payload==='VietNamise'){
                state='VietNamise';
            }else{
                state='English';
            }
            return state;
        }
    }
})
export const {handleLanguage}=reducerLangage.actions;
export default reducerLangage.reducer;