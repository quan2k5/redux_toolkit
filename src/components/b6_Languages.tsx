import React from 'react'
import { UseSelector,useDispatch, useSelector } from 'react-redux'
import { CheckOutlined } from '@ant-design/icons';
import { handleLanguage } from '../store/reducer/LanguageReducer'
export default function b6_Languages() {
    const state:any=useSelector(state=>state);
    const dispatch=useDispatch();
    const checkBackground=(str:string)=>{
        return state.languages==str?'blue':'white'
    }
  return (
    <div>
        <ul>
            <li>{state.languages}</li>
            <li  style={{width:"150px", backgroundColor:checkBackground('VietNamise')}} onClick={()=>dispatch(handleLanguage('VietNamise'))}>
            { state.languages==='VietNamise'? <><span style={{marginRight:"15px"}}>VietNamise</span><CheckOutlined /></>:<>VietNamise</>}
            </li>
            <li onClick={()=>dispatch(handleLanguage('English'))} style={{width:"150px", backgroundColor:checkBackground('English')}} >
            { state.languages==='English'? <><span style={{marginRight:"15px"}}>English</span><CheckOutlined /></>:<>English</>}
            </li>
        </ul>
        <div>{state.languages==='VietNamise'?'Học viện Rikkei':'Rikkei Academy'}</div>
    </div>
  )
}
