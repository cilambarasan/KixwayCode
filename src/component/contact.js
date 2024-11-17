import React, { Component } from 'react';
import './dhars.css'
import { Link } from 'react-router-dom';
import f1 from './images/con2.jpg';
import f2 from'./images/con3.jpg';
import f3 from './images/con1.jpg';
export const Contact=()=>{
    return(
        <>
          <Link to={-1} className='wo'style={{textDecoration:'none'}}><center><h1 className='kixway' >KIXWAY</h1></center></Link><br></br>
          <h2>ASK OUR CUSTOMER SERVICE</h2>
          <img src={f1} alt='' height='400' width='200' className='co1'/>
          <img src={f2} alt='' height='400' width='200' className='co2'/>
          <img src={f3} alt='' height='400' width='200' className='co3'/>
          <p className='c1'>CUSTOMER SERVICE EMAIL -<br></br>Use the service@online.kixway.co.into<br></br>contact our support team</p>
          <p className='c2'>CUSTOMER SERVICE MESSAGES<br></br>1800 811 6453<br></br>Products & Orders: 24 hours a day, 7 days a week</p>
          <p className='c3'>SOCIAL MEDIA<br></br>For instant updates<br></br>follow : kixway_shop</p>
        </>
    )
}