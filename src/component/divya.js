import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './divya.css'
import f1 from './images/div3.png';
import f2 from './images/div1.jpg';
export const Forgot1=()=>{
    return(
        <>
            <img src={f2} alt="" width="2000" height="900"/>
    <form class="hii">
            <fieldset><h4 className='fopa'>FORGOT PASSWORD</h4></fieldset>
           <legend className='hlo'>DATING</legend>
                <input type="password" placeholder="ENTER NEW PASSWORD" name="name" id="name" required/><br></br><br></br>
                <input type="password" placeholder="ENTER PASSWORD" name="pass" id="pass" required/><br></br><br></br>

                <Link className='hee' style={{backgroundColor:'pink'}} >CONFIRM</Link><br></br><br></br>
                       
        </form>
                    <img src={f1} alt="" className='he' width="200" height="200"/>

        </>
    )
}