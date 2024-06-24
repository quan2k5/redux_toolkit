import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase,decrease,reset } from '../store/reducer/CoutReducer';
export default function Count() {
   const state:any=useSelector((state)=>state);
   const dispatch=useDispatch();
  return (
    <div>
        <p>Gía trị count :{state.count}</p>
        <button onClick={()=>{dispatch(increase())}}>Tăng</button>
        <button onClick={()=>{dispatch(decrease())}}>Giảm</button>
        <button onClick={()=>{dispatch(reset())}}>Reset</button>
    </div>
  )
}
