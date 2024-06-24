import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { random } from '../store/reducer/RandomReducer'
export default function b2_Random() {
    const state:any=useSelector((state)=>state);
    const dispatch=useDispatch();


  return (
    <div>
        <span>List number:</span>
        {state.random.map((e:number)=>{
            return <span>{e},</span>
        })}
        <br />
        <button onClick={()=>{dispatch(random())}}>Random Number</button>
    </div>
  )
}
