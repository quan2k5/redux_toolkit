import React from 'react'
import { UseSelector,useDispatch, useSelector } from 'react-redux'
import { check } from '../store/reducer/LightReducer'
export default function b3_Light() {
    const state:any=useSelector((state)=>state);
    const dispatch=useDispatch();
    const check1=(light:boolean)=>{
        return light===true?'white':'black';
    }
  return (
    <div>
        <button onClick={()=>{dispatch(check())}}>{state.light?'DARK':'LIGHT'}</button>
        <br />
        <div style={{width:'100px', height:'100px',backgroundColor:check1(state.light)}}></div>
    </div>
  )
}
