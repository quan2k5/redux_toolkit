import {configureStore } from "@reduxjs/toolkit";
import dung from './reducer/CoutReducer';
import  Random from './reducer/RandomReducer'
import Light from './reducer/LightReducer'
import Menu from './reducer/MenuReducer'
import Languages from'./reducer/LanguageReducer'
import Favourite from "./reducer/FavouriteReducer";
import Grid from './reducer/GridReducer';
import User from './reducer/LoginReducer'
export const store=configureStore({
    reducer:{
        count:dung,
        random:Random,
        light:Light,
        menu:Menu,
        languages:Languages,
        favourite:Favourite,
        grid:Grid,
        user:User,

    }
})