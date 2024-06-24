import React from 'react'
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'
import Home from './b8_Home'
import Profile from './b8_Profile'
import Login from './b8_login'
import Navbar from './b8_Navbar'
import { UseSelector,useDispatch, useSelector } from 'react-redux';
export default function b8_index() {
    const state:any=useSelector(state=>state);
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Navbar></Navbar>}>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/profile' element={state.user.status?<Profile></Profile>:<Navigate replace to='/login'></Navigate>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
    </Routes>
    </BrowserRouter>
  )
}
