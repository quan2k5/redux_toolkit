import React from 'react'
import { UseSelector,useDispatch, useSelector } from 'react-redux'
import {check } from '../store/reducer/GridReducer'
import './b4.css'
export default function b4() {
    const state:any=useSelector((state)=>state);
    const dispatch=useDispatch();
    const check1=(grid:boolean)=>{
        return grid===true?'white':'black';
    }
    return(
    <div>
         <button onClick={()=>{dispatch(check())}}>{state.grid?'List Mode':'Grid mode'}</button>
         <br />
         {state.grid?<div className='total-1'>
            <div className='box-1'></div>
            <div className='box-1'></div>
            <div className='box-1'></div>
            <div className='box-1'></div>
          </div>:<div className='total-2'>
                <div className='box-2'></div>
                <div className='box-2'></div>
                <div className='box-2'></div>
                <div className='box-2'></div>
            </div>
        }

    </div>
    )
}
