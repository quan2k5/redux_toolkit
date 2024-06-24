import React from 'react'
import './b5_Menu.css'
import { UseSelector,UseDispatch, useSelector, useDispatch } from 'react-redux'
import {check} from '../store/reducer/MenuReducer'
import { ClockCircleOutlined,UserOutlined,DollarOutlined,LineChartOutlined,FileOutlined,LeftOutlined,RightOutlined } from '@ant-design/icons'
export default function b5_Menu() {
    const state:any=useSelector((state)=>state);
    const dispatch=useDispatch();
    const checkWidth=()=>{
        return state.menu?'140px':'20px';
    }
  return (
    <div>
        <ul className='menuList' style={{width:checkWidth()}}>
            <li>
                <ClockCircleOutlined />
                {state.menu &&  <span className='CategoryName'>Bảng điều khiển</span>}
            </li>
            <li>
                <UserOutlined />
                {state.menu && <span className='CategoryName'>Tài khoản</span>}
            </li>
            <li>
                <DollarOutlined />
                {state.menu && <span className='CategoryName'>Tài sản</span>}
            </li>
            <li>
                <LineChartOutlined />
                 {state.menu && <span className='CategoryName'>Thống kê</span>}
            </li>
            <li>
                <FileOutlined />
                {state.menu && <span className='CategoryName'>Tài liệu</span>}
            </li>
            <li style={{cursor:"pointer"}} onClick={()=>{dispatch(check())}}>
                {state.menu?<>
                    <LeftOutlined />
                    <span className='CategoryName'>Thu gọn</span>
                </>:<>
                    <RightOutlined />
                </>}
            </li>
        </ul>
    </div>
  )
}
