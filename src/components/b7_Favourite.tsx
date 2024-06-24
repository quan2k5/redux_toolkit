import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HeartOutlined } from '@ant-design/icons';
import { handleFavourite } from '../store/reducer/FavouriteReducer';
export default function b7_Favourite() {
    const state:any=useSelector(state=>state);
    const dispatch=useDispatch();
    const checkColor=(e:any)=>{
        return e.favourites?'red':'black';
    }
  return (
    <div>
        <h3>List Favourites User</h3>
        <ul>
            {state.favourite.map((e:any)=>{
                return <li>
                    <div>UserName:{e.userName}</div>
                    <div>
                        <span>Favourites:</span>
                        <HeartOutlined onClick={()=>{dispatch(handleFavourite(e.id))}} style={{cursor:'pointer',color:checkColor(e)}} />
                    </div>
                </li>
            })}

        </ul>
    </div>
  )
}
