import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import f1 from './images/fi.png';
export const Final=()=>
{
  return(
    <>
     <Link to={-1} className='wo'style={{textDecoration:'none'}}><center><h1 className='kixway' >KIXWAY</h1></center></Link>
     <center><img src={f1} alt='' height='600' width='600'></img></center>
    </>
  )
}