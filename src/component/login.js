import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './dhars.css';
import f1 from './images/2.png';
export const Log=()=>{
    const navigate  = useNavigate();
    return(
        <>
           <h1 >WELCOME TO KIXWAY!</h1>
           <img src={f1} alt=""/>

        <div class="hii">

           <fieldset><h4 className='head'>LOGIN HERE!</h4></fieldset><br></br>
        <form >
         <legend className='leg'>KIXWAY</legend>
                <input type="TEXT" placeholder="ENTER USERNAME" name="name" id="name" required/><br></br><br></br>
                <input type="password" placeholder="ENTER PASSWORD" name="pass" id="pass" required/><br></br>
                    <Link to={'/forgot'} className='lofo'>FORGOT PASSWORD ?</Link><br></br>
                    <button className='logbu' onClick={()=>navigate('/')}>LOGIN</button><br></br><br></br>
                <Link to={'/signup'} className='losi'>NEW USER</Link><br></br>
            
        </form>
         
    </div>
   
        </>
    )
}
export default Log;