import React from 'react'
import { Link, Outlet,useNavigate } from 'react-router-dom'
import { UseSelector,useDispatch, useSelector } from 'react-redux';
import {logout} from'../store/reducer/LoginReducer'
export default function b8_Navbar() {
    const state:any=useSelector(state=>state);
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const handleOut=()=>{
        navigate('/');
        dispatch(logout());
    }
  return (
    <div>
        <Link to='/'>Home</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/login'>Login</Link>
        {state.user.status && <button onClick={handleOut}>Đăng xuất</button>}
        <Outlet></Outlet>
    </div>
  )
}
