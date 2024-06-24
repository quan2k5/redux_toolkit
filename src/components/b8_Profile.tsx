import React from 'react'
import { UseSelector,useDispatch, useSelector } from 'react-redux';
export default function b8_Profile() {
    const state:any=useSelector(state=>state);
  return (
    <div>
        <h4>Your profile:</h4>
        <p>Email:{state.user.email}</p>
        <p>Password:{state.user.password}</p>
    </div>
  )
}
