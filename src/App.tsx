import React from 'react'
import Count from './components/b1_Count'
import Random from './components/b2_Random'
import Light from './components/b3_Light'
import Menu from './components/b5_Menu'
import Languages from './components/b6_Languages'
import Favourites from './components/b7_Favourite'
import Grid from './components/b4';
import Index from './components/b8_index'
export default function App() {
  return (
    <div>
      <Count></Count>
      <br />
      <Random></Random>
      <br />
      <Light></Light>
      <br />
      <Grid></Grid>
      <br />
      <Menu></Menu>
      <br />
      <Languages></Languages>
      <br />
      <Favourites></Favourites>
      <br />
      <Index></Index>
    </div>
  )
}
