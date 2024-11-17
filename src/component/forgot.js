import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import f1 from './images/4.png';
export const Forgot=() => {
    const navigate=useNavigate();
    return(
        <>
          <img  src={f1} alt="" className='foim' />
       <center> <h2 className="HLO">KIXWAY</h2></center>
        <div className="gh">
            <center>
            <fieldset><h4  className='fore'>RESET PASSWORD</h4></fieldset>
         <form>
            <p className='par'>ENTER YOUR MAIL ID WE WILL SEND YOU A LINK TO RESET YOUR PASSWORD</p><br></br>
            <input type="email" placeholder="ENTER YOUR EMAIL" className='seem'/><br></br><br></br>
            <button className='submit' onClick={()=>navigate('/login')}>SEND MAIL</button>
             
         </form>
            </center>
         </div>
         <div className='back'> <button  onClick={()=>navigate(-1)}>back</button></div>
        </>
    )
}