import React, { useState } from 'react'
import { UseSelector,useDispatch, useSelector } from 'react-redux';
import {login} from '../store/reducer/LoginReducer'
import { useNavigate } from 'react-router-dom';
interface User{
    email:string,
    password:string,
    status:false,
}
export default function b8_login() {
    const state:any=useSelector(state=>state);
    const dispatch=useDispatch();
    const [user,setUser]=useState<User>({email:'',password:'',status:false});
    const navigate=useNavigate();
    const handleChange=(e:any)=>{
        const value=e.target.value;
        const name=e.target.name;
        setUser({...user,[name]:value});
    }
    const handleSubmit=(e:any)=>{
        e.preventDefault();
        if(state.user.email===user.email && state.user.password===user.password){
            dispatch(login());
            navigate('/');
        }else{
            alert('tài khoản đang sai')
        }
    }
  return (
    <form>
        <h3>LOGIN FORM</h3>
        <br />
        <div>
            <label htmlFor="">Email</label>
            <br />
            <input type="text" onChange={(e)=>{handleChange(e)}} name='email' value={user.email} />
        </div>
        <div>
            <label htmlFor="">Password</label>
            <br />
            <input type="password"  onChange={(e)=>{handleChange(e)}} name='password' value={user.password} />
        </div>
        <button onClick={handleSubmit}>Login</button>
    </form>
  )
}
